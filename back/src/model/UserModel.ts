import { connection } from '../connection'
import login from '../types/login';
import jwt from 'jsonwebtoken'
import {config} from "dotenv";

config();

const userModel = {
    login: async ({ email, password }: login): Promise<any> => {
        try {
            const result = await connection.raw(`
                SELECT login.Id, login.Email, registrationData.Name from login
                join registrationData on login.id = registrationData.id
                WHERE login.email = '${email}' and 
                login.password = '${password}'
            `)
            return result[0];
        }
        catch (err) {
            return (err.message || err.sqlMessage)
        }
    },
    getIdToken: async (token: string): Promise<any> => {
        try {
            let id:string = "";

            if (!token) {
                throw new Error("Invalid Token")
            }
            jwt.verify(token, process.env.SECRET || "", (err: any, decoded: any): any => {
                if (err) {
                    throw new Error("Failed to authenticate token")
                }
                id = decoded.id;
            })
            const result = await connection.raw(`
                SELECT Id from login
                WHERE id = '${id}'
            `)
            return (id)
        }
        catch (err) {
            return (err.message || err.sqlMessage)
        }
    }
}
export default userModel;


           

            
            
