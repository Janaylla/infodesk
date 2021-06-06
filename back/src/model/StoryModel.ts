import {connection} from '../connection'
import story from '../types/story'
const storyModel = {
    get: async ():Promise<any> => {
        try{
            const result =  await connection.raw(`
            SELECT s.Id, s.Date, s.Title, s.Text, s.UserId, 
            r.FirstName, r.LastName, lg.Email, r.UserName,
            count(liked) as 'like', count(c.Id) as 'comments'
            FROM stories AS s
            LEFT JOIN likestory as l ON l.StoryId = s.Id
            LEFT JOIN registrationdata as r ON r.Id = s.UserId
            LEFT JOIN login as lg ON lg.Id = s.UserId
            LEFT JOIN storieslevelcomments1 as c on c.StoryId = s.Id  
            group by s.Id
            order by s.Date DESC
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
                SELECT * FROM stories WHERE id = ${id}
            `)
            
            return result[0][0];
        }
        catch(err){
            return (err.message || err.sqlMessage)
        }
    },
    create: async ({userId, text, title, date}:story):Promise<any> => {
        
        try{
            const result =  await connection.raw(`
                INSERT INTO stories (UserId, Title, Text, Data)
                VALUES ('${userId}', '${title}', '${text}', '${date}');
            `)
            return result[0].affectedRows;
        }
        catch(err){
            return (err.message || err.sqlMessage)
        }
    },
    like: async (id:string, id_user:string, like:number):Promise<any> => {
        
        try{
            const result1 = await connection.raw(`
                DELETE FROM likestory WHERE UserId = ${id_user} and storiesId = ${id}
            `)
            if(like === -1 || like === 1){
            const result =  await connection.raw(`
                INSERT INTO likestory  VALUE (${id}, ${id_user}, ${like === 1})
            `)
            return result[0].affectedRows;
            }
            return result1[0].affectedRows;
        }
        catch(err){
            return (err.message || err.sqlMessage)
        }
    }
}
export default storyModel;