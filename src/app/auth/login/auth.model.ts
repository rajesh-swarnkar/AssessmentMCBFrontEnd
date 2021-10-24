export interface IUser {
    email?: string;
    username: string;
    password: string;
}
export interface IMessage {
    jwt: string;
    message: string;
    token?: string;
    email?: string;
    role?: string;
}
