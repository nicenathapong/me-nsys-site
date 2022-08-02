import { getCollection } from "./mongodb";

import type { ReqType, ResType } from "./sessions";

export async function register({ req, res }: IRequest, { username, password }: IAuthOptions) {

}

export async function login({ req, res }: IRequest, { username, password }: IAuthOptions) {

}

export async function logout({ req, res }: IRequest, ) {
    
}

export async function getUser(id: string): Promise<UserFilterType | null> {
    const users = await getCollection('users');
    const user = await users.findOne({ id });
    if (!user) {
        return null;
    }
    return filterUser(user);
}

export async function getUsers(): Promise<UserFilterType[]> {
    const users = await getCollection('users');
    const allUsers = await users.find().toArray();
    return allUsers.map(u => filterUser(u) as UserFilterType);
}

export async function deleteUser(id: string) {

}

function filterUser(user: any): UserFilterType | null {
    if (user?._id) {
        delete user._id;
    }
    if (user?.password) {
        delete user.password;
    }
    return user;
}

export interface IUser {
    id: string;
    username: string;
    password: string;
    isAdmin: boolean;
}

interface IAuthOptions {
    username: string;
    password: string;
}

interface IRequest {
    req: ReqType;
    res: ResType;
}

export type UserFilterType = Omit<IUser, 'password' | '_id'>;