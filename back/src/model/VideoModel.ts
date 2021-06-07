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
            SELECT v.id, v.Title, v.Date, v.Url, 
            (SELECT COUNT(*) Favorite from favoritevideo as 
            f WHERE f.VideoId = v.Id)
            as Favorite  FROM videos as v
            WHERE Id = ${Id}
            `)
            if(result[0].length !==1){
                throw new Error("Video not found")
            }
            return result[0][0];

        }
        catch (err) {
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
            return result[0];
        }
        catch (err) {
            return (err.message || err.sqlMessage)
        }
    },
}
export default videoModel;
