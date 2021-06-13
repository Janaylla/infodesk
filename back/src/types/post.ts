type post = {
    id?: number,
    userId: string,
    description: string,
    date: Date|undefined|string,
    price: string,
    accommodation: string,
    address: string
}

export type posts = Array<post>;

export default post