import {Request, Response} from 'express'
import StoryModel from '../model/StoryModel'
import userModel from '../model/userModel'
import story from '../types/story'

const classController = {
    get: async (req: Request, res: Response):Promise<any> => {
        try{    
            const token = req.headers.authorization as string;
            const UserId =token? await userModel.getIdToken(token): false;
            const dbResult = Number(UserId) ? await StoryModel.get(UserId):
            await StoryModel.get()
            res.send({
                stories: dbResult
            })
        }
        catch(err){
            res.send({message: err.message})
        }
    },
    getById: async (req: Request, res: Response):Promise<any> => {
        try{
            const id = req.params.id;
            const dbResult = await StoryModel.getById(id);

            res.send({
                story: dbResult
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
            let {date,title,text}:story = req.body;
            const currentDate = new Date();
            
            date = date || `${currentDate.toLocaleString("fr-CA").slice(0, 10)} ${currentDate.toTimeString().slice(0, 8)}`
          
            const dbResult = await StoryModel.create({userId, date, title, text});
            console.log(dbResult)
            if(dbResult != 1){
                res.statusCode = 400;
                throw new Error("Story not inserted")
            }
            res.send({
                message: "Story inserted"
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
            console.log(like, userId,id)
            like =  (Number(like) === 1|| Number(like) === -1) ? Number(like) : 0;
            const dbResult = await StoryModel.like(id, userId, like);
            if(dbResult != 1){
                res.statusCode = 400;
                throw new Error("story marked as I didn't like")
            }
            let messageSuccess =  "";
            if(like === 1)
                messageSuccess = "story marked as I liked"
            else if(like === -1)
                messageSuccess = "story marked as I disliked"
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