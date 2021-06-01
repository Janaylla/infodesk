import { connection } from "../Connection/connection"
import { Login } from '../types'

export async function selectAllPosts():Promise<any> {
    const result = await connection.raw(`
       SELECT *
       FROM posts;
    `)
 
    return result[0]
}

export async function loginUser(body:Login):Promise<any> {
    const {email, password} = body;
    const result = await connection.raw(`
       SELECT COUNT(*) as User_Count
       FROM login WHERE Email = '${email}' and Password = '${password}';
    `)
    return result[0][0].User_Count >0    
}

