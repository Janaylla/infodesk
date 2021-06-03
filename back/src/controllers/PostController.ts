import {Request, Response} from 'express'
import postModel from '../model/PostModel'
import userModel from '../model/userModel'
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
            const token = req.headers.authorization as string;
            const userId = await userModel.getIdToken(token)
            let {text, date, price}:post = req.body;
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
    },
    like: async (req: Request, res: Response):Promise<any> => {
        try{
            const token = req.headers.authorization as string;
            const userId = await userModel.getIdToken(token)
            
            if(!userId){
                throw new Error(`User Invalid`)
            }
            const id = req.params.id as string;
            let like = req.query.like as string|number;
            like =  (Number(like) === 1|| Number(like) === -1) ? Number(like) : 0;
            const dbResult = await postModel.like(id, userId, like);

            if(dbResult != 1){
                res.statusCode = 400;
                throw new Error("Post marked as I didn't like")
            }
            let messageSuccess =  "";
            if(like === 1)
                messageSuccess = "Post marked as I liked"
            else if(like === -1)
                messageSuccess = "Post marked as I disliked"
            else
                messageSuccess = "Demarcated like or dislike"

            res.send({
                message: messageSuccess
            })
        }
        catch(err){
            res.send({message: err.message})
        }
    }
} 
export default classController 