import { connection } from '../connection'

const videoModel = {
    get: async (): Promise<any> => {
        try {
            const result = await connection.raw(`
            SELECT * FROM videos LIMIT 6
            `)
            return result[0];
        }
        catch (err) {
            return (err.message || err.sqlMessage)
        }
    },
    getById: async (Id:number): Promise<any> => {
        try {
            const result = await connection.raw(`
            SELECT * FROM videos WHERE Id = ${Id}
            `)
            if(result[0].length !==1){
                throw new Error("Video not found")
            }
            return result[0][0];

        }
        catch (err) {
            return (err.message || err.sqlMessage)
        }
    }
}
export default videoModel;






