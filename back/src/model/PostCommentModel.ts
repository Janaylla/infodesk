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
            SELECT c.Id, c.PostId, c.Date, c.Text, r.FirstName, r.LastName,
            r.UserName,
            (SELECT COUNT(*) FROM likepostslevelcomments1 as l
             WHERE l.Comment1Id = c.Id AND l.liked = true) as 'Likes',  
            (SELECT COUNT(*) FROM likepostslevelcomments1 as l
             WHERE l.Comment1Id = c.Id AND l.liked = false) as 'DisLikes'
            ${userId ? `,(select l.liked from likepostslevelcomments1 as l 
            WHERE l.UserId = `+userId+` and l.Comment1Id = c.Id) as myLike`: ""}
            FROM postslevelcomments1 as c
            LEFT JOIN registrationdata as r ON r.Id = c.UserId
            LEFT JOIN likepostslevelcomments1 as l on  l.UserId = c.UserId 
           WHERE c.PostId = ${PostId}
           group by c.Id
           order by c.Date DESC
            `)
            return result[0];
        }
        catch(err){
            return (err.message || err.sqlMessage)
        }
    },
    getLevel2:  async (Comment1Id:string, userId?:string):Promise<any> => {    
        try{
            const result =  await connection.raw(`
            SELECT c2.Id, c2.Comment1Id , c2.Date, c2.Text, r.FirstName,
             r.LastName, r.UserName,
            (SELECT COUNT(*) FROM likepostslevelcomments2 as l
             WHERE l.Comment2Id = c2.Id AND l.liked = true) as 'Likes',  
            (SELECT COUNT(*) FROM likepostslevelcomments2 as l
             WHERE l.Comment2Id = c2.Id AND l.liked = false) as 'DisLikes'
             ${userId ? `,(select l.liked from likepostslevelcomments2 as l 
            WHERE l.UserId = `+userId+` and l.Comment2Id = c2.Id) as myLike`:""}
            FROM postslevelcomments2 as c2
            LEFT JOIN registrationdata as r ON r.Id = c2.UserId
            LEFT JOIN likepostslevelcomments2 as l on  l.UserId = c2.UserId 
           WHERE c2.Comment1Id = ${Comment1Id}
           group by c2.Id
           order by c2.Date DESC
            `)
            return result[0];
        }
        catch(err){
            return (err.message || err.sqlMessage)
        }
    },
    getLevel3:  async (Comment2Id:string, userId?:string):Promise<any> => {    
        try{
            const result =  await connection.raw(`
            SELECT c3.Id, c3.Comment2Id , c3.Date, c3.Text,
             r.FirstName, r.LastName, r.UserName,
            (SELECT COUNT(*) FROM likepostslevelcomments3 as l
             WHERE l.Comment3Id = c3.Id AND l.liked = true) as 'Likes',  
            (SELECT COUNT(*) FROM likepostslevelcomments3 as l
             WHERE l.Comment3Id = c3.Id AND l.liked = false) as 'DisLikes'
             ${userId ? `,(select l.liked from likepostslevelcomments3 as l 
            WHERE l.UserId = `+userId+` and l.Comment3Id = c3.Id) as myLike`: ""}
            FROM postslevelcomments3 as c3
            LEFT JOIN registrationdata as r ON r.Id = c3.UserId
            LEFT JOIN likepostslevelcomments3 as l on  l.UserId = c3.UserId 
           WHERE c3.Comment2Id = ${Comment2Id}
           group by c3.Id
           order by c3.Date DESC
            `)
            return result[0];
        }
        catch(err){
            return (err.message || err.sqlMessage)
        }
    }
}
export default postModel;