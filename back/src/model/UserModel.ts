import {connection} from '../connection'
import login from '../types/login';

const userModel = {
    login: async ({email, password}:login):Promise<any> => {
        try{
            const result =  await connection.raw(`
                SELECT login.Id, login.Email, registrationData.Name from login
                join registrationData on login.id = registrationData.id
                WHERE login.email = '${email}' and 
                login.password = '${password}'
            `)
            return result[0];
        }
        catch(err){
            return (err.message || err.sqlMessage)
        }
    }
}
export default userModel;