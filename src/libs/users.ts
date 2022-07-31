import { getCollection } from "./mongodb";

export async function getUser(id: string): Promise<UserFilterType | null> {
    const users = await getCollection('users');
    const user = await users.findOne({ id });
    if (!user) {
        return null;
    }
    return filterUser(user);
}

export function createUser() {

}

export function deleteUser() {

}

export async function login() {

}

export async function logout() {
    
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

export type UserFilterType = Omit<IUser, 'password' | '_id'>;