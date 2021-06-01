export type User = {
    id: number,
    name: string,
    email: string,
    type: string
}

export enum UserEnum {
    id = "id",
    name = "name",
    email = "email",
    type = "type"
}

export type Login = {
    id?: number,
    email: string,
    password: string
}