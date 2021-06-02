import {connection} from '../connection'
import post from '../types/post'
const postModel = {
    get: async ():Promise<any> => {
        try{
            const result =  await connection.raw(`
                SELECT * FROM posts
            `)
            return result[0];
        }
        catch(err){
            return (err.message || err.sqlMessage)
        }
    },
    getById: async (id:string):Promise<any> => {
        try{
            const result =  await connection.raw(`
                SELECT * FROM posts WHERE id = ${id}
            `)
            
            return result[0][0];
        }
        catch(err){
            return (err.message || err.sqlMessage)
        }
    },
    create: async ({userId, text, date, price}:post):Promise<any> => {
        
        try{
            const result =  await connection.raw(`
                INSERT INTO posts (UserId, Text, Date, Price)
                VALUES ('${userId}', '${text}', '${date}', '${price}');
            `)
            return result[0].affectedRows;
        }
        catch(err){
            return (err.message || err.sqlMessage)
        }
    }
}
export default postModel;