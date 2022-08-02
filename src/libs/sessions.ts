import { setCookie, deleteCookie } from "cookies-next";
import { sign, verify } from 'jsonwebtoken';
import { getCollection } from "./mongodb";
import { getUser } from "./users";
import { deleteMongoId } from "../utils/backend";
import config from "../../config";

import type { IncomingMessage, ServerResponse } from 'http';
import type { UserFilterType } from "./users";

export async function createSession(userId: string, { req, res }: IContext): Promise<UserWithSessionType | null> {
    const user = await getUser(userId);
    if (!user) {
        return null;
    }
    const token = _createToken(userId);
    setCookie('sessionToken', token, {
        req, res,
        expires: new Date(Date.now() + config.session.timeOut),
        maxAge: config.session.timeOut
    });
    const session = _praseToken(token) as ISession;
    await Promise.all([
        getCollection('sessions').then(col => col.insertOne(session)),
        clearSession()
    ]);
    deleteMongoId(session);
    return { ...user, session };
}

export async function getSession({ req, res }: IContext): Promise<UserWithSessionType | null> {
    const { sessionToken } = req.cookies;
    if (!sessionToken) {
        return null;
    }
    const prased = _praseToken(sessionToken);
    if (!prased) {
        return null;
    }
    const sessions = await getCollection('sessions');
    const session = await sessions.findOne(prased).then(deleteMongoId) as ISession | null;
    if (!session) {
        return null;
    }
    if ((session.iat * 1000) + config.session.timeOut < Date.now()) {
        await deleteSession(session, { req, res });
        return null;
    }
    const user = await getUser(session.id);
    if (!user) {
        return null;
    }
    return { ...user, session };
}

export async function deleteSession(session: ISession, { req, res }: IContext) {
    deleteCookie('sessionToken', { req, res });
    const sessions = await getCollection('sessions');
    await sessions.deleteOne(session);
}

function _createToken(id: string) {
    return sign({ id }, config.encoder.secretKey);
}

function _praseToken(token: string) {
    try {
        return verify(token, config.encoder.secretKey) as null | ISession;
    } catch (e) {
        return null;
    }
}

export async function clearSession() {
    const sessions = await getCollection('sessions');
    await sessions.deleteMany({ iat: { $lt: Date.now() - config.session.timeOut } });
}

export interface ISession {
    id: string;
    iat: number;
}

export interface IContext {
    req: ReqType;
    res: ResType;
}

export type ReqType = IncomingMessage & { cookies: { [key: string]: string } }
export type ResType = ServerResponse;

export type UserWithSessionType = UserFilterType & { session: ISession }