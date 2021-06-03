import {Request, Response} from 'express'
import userModel from '../model/userModel'
import login from '../types/login'
import jwt from 'jsonwebtoken'
import {config} from "dotenv";

config();

const classController = {
    login: async (req: Request, res: Response):Promise<any> => {
        try{
            const {email, password}:login = req.body;

            const dbResult = await userModel.login({email, password})

            if(dbResult.length !== 1){
                res.statusCode = 400;
                throw new Error("User not found")
            }

            const id = dbResult[0].Id; 
            const token = jwt.sign({ id }, process.env.SECRET || "", {
                expiresIn: 86400000
            });

            res.send({
                user: dbResult[0],
                token: token
            })
        }
        catch(err){
            res.send({message: err.message})
        }
    },
    test:async (req: Request, res: Response):Promise<any> => {
        try{
            const token:string = req.headers.authorization as string;
                                    
            const dbResult = await userModel.getIdToken(token)

            res.send({dbResult})
        }
        catch(err){
            res.send({message: err.message})
        }
    },
} 
export default classController 