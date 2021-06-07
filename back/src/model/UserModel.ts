import { connection } from '../connection'
import login from '../types/login';
import singUp from '../types/singUp';

import jwt from 'jsonwebtoken'
import { config } from "dotenv";

config();

const userModel = {
    login: async ({ email, password }: login): Promise<any> => {
        try {
            const result = await connection.raw(`
                SELECT login.Id, login.Email, registrationData.FirstName from login
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
            let id: string = "";

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
                WHERE id = ${id}
            `)
            if (!result[0].length) {
                throw new Error("Failed to authenticate token")
            }
            return (id)
        }
        catch (err) {
            return (err.message || err.sqlMessage)
        }
    },
    getById: async(id:string):Promise<any> =>{
        try{
            const result = await connection.raw(`
                SELECT * FROM registrationdata WHERE id = ${id};
            `)
            if(!result[0].length){
                throw new Error("User not found")
            }
            return result[0][0]
        }
        catch(err){
            return (err.message || err.sqlMessage)
        }
    },
    create: async ({ email, firstName, lastName, password, userName }: singUp): Promise<any> => {
        try {
            const result1 = await connection.raw(`
            INSERT INTO registrationdata (FirstName, LastName, Email, UserName) 
            VALUES ('${firstName}', '${lastName} ', '${email}', '${userName}');
            `)
            if (!result1[0].affectedRows)
                return ("Email or username already exists")

            const result2 = await connection.raw(`
            SELECT * FROM registrationdata where email = '${email}'`)

                console.log(result2)
            const result3 = await connection.raw(`
                INSERT INTO login (Email, Password, Id) VALUES 
                ('${email}', '${password}', ${result2[0][0].Id});
            `)

            return result2[0];
        }
        catch (err) {
            return (err.message || err.sqlMessage)
        }
    }
}
export default userModel;






