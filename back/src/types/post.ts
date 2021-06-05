type post = {
    id?: number,
    userId: string,
    description: string,
    date: Date|undefined|string,
    price: string,
    accommodation: string
}

export type posts = Array<post>;

export default post