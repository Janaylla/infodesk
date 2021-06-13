import { connection } from '../connection'

const videoModel = {
    get: async (endSelect: string): Promise<any> => {
        try {
            const result = await connection.raw(`
            SELECT v.Id, v.Date,v.Title, v.Topic, v.Title, 
            sum(l.Liked) as Likes FROM videos as v
            left join likevideo as l
            on l.VideoId = v.Id
            ${endSelect}
            `)
            return result[0];
        }
        catch (err) {
            return (err.message || err.sqlMessage)
        }
    },
    getById: async (Id:number, userId?:number): Promise<any> => {
        try {
            const result = await connection.raw(`
            SELECT v.id, v.Title, v.Date, v.Url,
            (SELECT COUNT(*) FROM likeVideo as l
            WHERE l.VideoId = v.Id AND l.liked = true) as 'Likes',  
           (SELECT COUNT(*) FROM likeVideo as l
            WHERE l.VideoId = v.Id AND l.liked = false) as 'DisLikes'
            ${userId ?`,
            (SELECT l.liked from likevideo as l 
                WHERE l.UserId = `+userId+` and l.VideoId = v.Id ) as MyLike,
            (SELECT COUNT(*) Favorite from favoritevideo as 
            f WHERE f.VideoId = v.Id and f.UserId = `+userId+`) as Favorite`:""}
              FROM videos as v
            WHERE v.Id = ${Id}
            `)
            if(result[0].length !==1){
                throw new Error("Video not found")
            }
            return result[0][0];

        }
        catch (err) {
            return (err.message || err.sqlMessage)
        }
    }, like: async (id:string, id_user:string, like:number):Promise<any> => {
        
        try{
            const result1 = await connection.raw(`
                DELETE FROM likevideo WHERE UserId = ${id_user} and VideoId = ${id}
            `)
            if(like === -1 || like === 1){
            const result =  await connection.raw(`
                INSERT INTO likevideo  VALUE (${id}, ${id_user}, ${like === 1})
            `)
            return result[0].affectedRows;
            }
            return result1[0].affectedRows;
        }
        catch(err){
            return (err.message || err.sqlMessage)
        }
    },
    favorite: async (id:string, userId:string, favorite:boolean):Promise<any> => {    
        try{  
            
            const result = favorite ?
            await connection.raw(`
            INSERT INTO favoritevideo VALUE (${userId}, ${id})
            `)  : await connection.raw(`
                DELETE FROM favoritevideo WHERE UserId = ${userId} and VideoId= ${id}
            `)
            return result[0].affectedRows;
        }
        catch(err){
            return (err.message || err.sqlMessage)
        }
    },
    getByFavoriteUser: async (userId:string): Promise<any> => {
        try {
            const result = await connection.raw(`
            SELECT * FROM videos as v
            join favoritevideo as f ON f.VideoId = v.Id
            WHERE f.UserId = ${userId}
            `)
            console.log(result)
            return result[0];
        }
        catch (err) {
            return (err.message || err.sqlMessage)
        }
    }
}
export default videoModel;
