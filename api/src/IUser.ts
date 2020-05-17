// DTOs are immutable

export interface IUser {
    readonly id: number;
    readonly name: string;
    readonly email: string;
}