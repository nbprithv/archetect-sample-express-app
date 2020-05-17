import {IUser} from "./IUser";

export interface addUser {
    (name: string, email: string): IUser;
}

export interface getUser {
    (id: number): IUser
}