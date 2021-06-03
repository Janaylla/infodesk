import {connection} from '../connection'
import comment from '../types/comment'
const postModel = {
    create: async ({date, userId, text}:comment, table:string, column:string, value:string):Promise<any> => {    
        try{
            const result =  await connection.raw(`
                INSERT INTO ${table} (UserId, ${column}, Text, Date) 
                VALUES (${userId}, ${value}, '${text}', '${date}');
            `)
            return result[0].affectedRows;
        }
        catch(err){
            return (err.message || err.sqlMessage)
        }
    },
    like: async (id:string, userId:string, like:number, table:string, column:string):Promise<any> => {    
        try{  
            const result1 = await connection.raw(`
                DELETE FROM ${table}  WHERE UserId = ${userId} and ${column} = ${id}
            `)
            if(like === -1 || like === 1){
            const result =  await connection.raw(`
                INSERT INTO ${table} (${column}, UserId, liked) VALUE (${id}, ${userId}, ${like === 1})
            `)
                return result[0].affectedRows;
            }
                return result1[0].affectedRows;

        }
        catch(err){
            return (err.message || err.sqlMessage)
        }
    },
}
export default postModel;