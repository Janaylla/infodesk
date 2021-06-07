import {Request, Response} from 'express'
import userModel from '../model/userModel'
import login from '../types/login'
import jwt from 'jsonwebtoken'
import {config} from "dotenv";
import singUp from '../types/singUp';

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
    getById: async (req: Request, res: Response):Promise<any> => {
        try{
            const token = req.headers.authorization as string;

            const userId = await userModel.getIdToken(token? token: "")
            
            const dbResult = await userModel.getById(userId)

            res.send({
                user: dbResult
            })
        }
        catch(err){
            res.send({message: err.message})
        }
    },
    create:async (req: Request, res: Response):Promise<any> => {
        try{                
            const {email, password, userName, lastName, firstName}:singUp = req.body;
         
            const dbResult = await userModel.create({email, password, userName, lastName, firstName})

            console.log(dbResult)
            if(dbResult.length !== 1){
                res.statusCode = 400;
                throw new Error("User not create")
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
} 
export default classController 