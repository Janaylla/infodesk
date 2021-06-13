import { Request, Response } from 'express'
import userModel from '../model/userModel'
import login from '../types/login'
import jwt from 'jsonwebtoken'
import { config } from "dotenv";
import singUp from '../types/singUp';

config();
const classController = {
    login: async (req: Request, res: Response): Promise<any> => {
        try {
            const { email, password }: login = req.body;

            const dbResult = await userModel.login({ email, password })

            if (dbResult.length !== 1) {
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
        catch (err) {
            res.send({ message: err.message })
        }
    },
    getById: async (req: Request, res: Response): Promise<any> => {
        try {
            const token = req.headers.authorization as string;

            const userId = await userModel.getIdToken(token ? token : "")

            const dbResult = await userModel.getById(userId)

            res.send({
                user: dbResult
            })
        }
        catch (err) {
            res.send({ message: err.message })
        }
    },
    create: async (req: Request, res: Response): Promise<any> => {
        try {
            const { email, password, userName, lastName, firstName, address }: singUp = req.body;

            const parse_email = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
            if (!email || email.length < 6) {
                throw new Error("Email invalid")
            }
            if (!password || password.length < 6) {
                throw new Error("Password invalid")
            }
            if (!userName) {
                throw new Error("UserName invalid")
            }
            if (!firstName) {
                throw new Error("First Name invalid")
            }
            if (!address) {
                throw new Error("Address invalid")
            }
            const dbResult = await userModel.create({ email, password, userName, lastName, firstName, address })
            console.log(dbResult)
            if (dbResult.length !== 1) {
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
        catch (err) {
            res.status(400).send({ message: err.message })
        }
    },
    edit: async (req: Request, res: Response): Promise<any> => {
        try {
            const { email, password, userName, lastName, firstName, address }: singUp = req.body;
            const oldPassword = req.body.oldPassword;
            const token = req.headers.authorization as string;
            const id = await userModel.getIdToken(token ? token : "")

            if (!email || email.length < 6) {
                throw new Error("Email invalid")
            }
            if (!password || password.length < 6) {
                throw new Error("Password invalid")
            }
            if (!userName) {
                throw new Error("UserName invalid")
            }
            if (!firstName) {
                throw new Error("First Name invalid")
            }
            if (!address) {
                throw new Error("Address invalid")
            }
            const dbResult = await userModel.edit({ email, password, userName, lastName, firstName, address, id}, oldPassword)
            
            if (!dbResult) {
                throw new Error("User not update")
            }
            res.send({
                message: "User update" 
            })
        }
        catch (err) {
            res.status(400).send({ message: err.message })
        }
    }
}
export default classController