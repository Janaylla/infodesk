import {selectAllPosts, loginUser } from '../Querys/userQuerys'
import {Request, Response} from 'express'
import {Login} from '../types'

export const getPosts = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllPosts()
        res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 export const isLogin = async(req: Request,res: Response): Promise<any> =>{
   try {
      const body = {
         email: req.body.email,
         password: req.body.password
      }
      console.log("Bory", body)
      const login:any = await loginUser(body)
       res.status(200).send(login)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}
