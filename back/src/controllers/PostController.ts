import {Request, Response} from 'express'
import postModel from '../model/PostModel'
import post from '../types/post'

const classController = {
    get: async (req: Request, res: Response):Promise<any> => {
        try{
            const dbResult = await postModel.get();

            res.send({
                posts: dbResult
            })
        }
        catch(err){
            res.send({message: err.message})
        }
    },
    getById: async (req: Request, res: Response):Promise<any> => {
        try{
            const id = req.params.id;
            const dbResult = await postModel.getById(id);

            res.send({
                post: dbResult
            })
        }
        catch(err){
            res.send({message: err.message})
        }
    },
    create: async (req: Request, res: Response):Promise<any> => {
        try{
            let {userId, text, date, price}:post = req.body;
            const currentDate = new Date();
            
            date = date || `${currentDate.toLocaleString("fr-CA").slice(0, 10)} ${currentDate.toTimeString().slice(0, 8)}`
            console.log(date)
            const dbResult = await postModel.create({userId, text, date, price});
            console.log(dbResult)
            if(dbResult != 1){
                res.statusCode = 400;
                throw new Error("Post not inserted")
            }
            res.send({
                message: "Post inserted"
            })
        }
        catch(err){
            res.send({message: err.message})
        }
    }
} 
export default classController 