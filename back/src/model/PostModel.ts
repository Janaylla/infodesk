import {connection} from '../connection'
import post from '../types/post'
const postModel = {
    get: async (where:string):Promise<any> => {
        try{
            const result =  await connection.raw(`
            SELECT p.Id, p.Date, p.Price, p.Text, p.UserId, 
            r.FirstName, r.LastName, lg.Email, r.UserName,
            count(liked) as 'like', count(c.Id) as 'comments', p.typeOfAccommodation 
            FROM posts AS p
            LEFT JOIN likeposts as l ON l.PostsId = p.Id
            LEFT JOIN registrationdata as r ON r.Id = p.UserId
            LEFT JOIN login as lg ON lg.Id = p.UserId
            LEFT JOIN postslevelcomments1 as c on c.PostId = p.Id  
            ${where?`WHERE ${where}`: ""}
            group by p.Id
            order by p.Date DESC
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
    getByUserId: async (id:string|number):Promise<any> => {
        try{
            const result =  await connection.raw(`
            SELECT p.Id, p.Date, p.Price, p.Text, p.UserId, 
            r.FirstName, r.LastName, lg.Email, r.UserName,
            count(liked) as 'like', count(c.Id) as 'comments', p.typeOfAccommodation 
            FROM posts AS p
            LEFT JOIN likeposts as l ON l.PostsId = p.Id
            LEFT JOIN registrationdata as r ON r.Id = p.UserId
            LEFT JOIN login as lg ON lg.Id = p.UserId
            LEFT JOIN postslevelcomments1 as c on c.PostId = p.Id  
            WHERE r.id = ${id}
            group by p.Id
            order by p.Date DESC
            `)
            return result[0];
        }
        catch(err){
            return (err.message || err.sqlMessage)
        }
    },
    create: async ({userId, description, date, price, accommodation}:post):Promise<any> => {
        
        try{
            const result =  await connection.raw(`
                INSERT INTO posts (UserId, Text, Date, Price, typeOfAccommodation)
                VALUES ('${userId}', '${description}', '${date}', ${price}, '${accommodation}');
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
                DELETE FROM likePosts WHERE UserId = ${id_user} and PostsId = ${id}
            `)
            if(like === -1 || like === 1){
            const result =  await connection.raw(`
                INSERT INTO likePosts  VALUE (${id}, ${id_user}, ${like === 1})
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
export default postModel;