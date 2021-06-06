type comment = {
    id?: number,
    userId: string,
    text: string,
    date: Date|undefined|string
}

export type comments = Array<comment>;

export default comment