type story = {
    id?: number,
    userId: string,
    title: string,
    text: string,
    date: Date|undefined|string,
    topic: string
}

export type stories = Array<story>;

export default story