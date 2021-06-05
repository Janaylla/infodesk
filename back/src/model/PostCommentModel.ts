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
    getLevel1:  async (PostId:string, userId?:string):Promise<any> => {    
        try{
            const result =  await connection.raw(`
            SELECT c.Id, c.PostId, c.Date, c.Text, r.Name, 
            (SELECT COUNT(*) FROM likepostslevelcomments1 as l
             WHERE l.Comment1Id = c.Id AND l.liked = true) as 'Likes',  
            (SELECT COUNT(*) FROM likepostslevelcomments1 as l
             WHERE l.Comment1Id = c.Id AND l.liked = false) as 'DisLikes',
            ${userId && `(select l.liked from likepostslevelcomments1 as l 
            WHERE l.UserId = ${userId} and l.Comment1Id = c.Id) as myLike`}
            FROM postslevelcomments1 as c
            LEFT JOIN registrationdata as r ON r.Id = c.UserId
            LEFT JOIN likepostslevelcomments1 as l on  l.UserId = c.UserId 
            LEFT JOIN postslevelcomments2 as c2 on c.PostId = c.Id 
           WHERE c.PostId = ${PostId}
           group by c.Id
            `)
            return result[0];
        }
        catch(err){
            return (err.message || err.sqlMessage)
        }
    }
}
export default postModel;