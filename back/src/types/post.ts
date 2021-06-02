type post = {
    id?: number,
    userId: string,
    text: string,
    date: Date|undefined|string,
    price: number
}

export type posts = Array<post>;

export default post