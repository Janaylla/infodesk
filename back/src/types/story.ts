type story = {
    id?: number,
    userId: string,
    title: string,
    text: string,
    date: Date|undefined|string
}

export type stories = Array<story>;

export default story