import {Request, Response} from 'express'
import VideoModel from '../model/VideoModel'
import userModel from '../model/userModel'
import videoModel from '../model/VideoModel';

const classController = {
    get: async (req: Request, res: Response):Promise<any> => {
        try{
            const {orderBy, topic} = req.query;
            let dbResult ;
            if(orderBy === 'Last'){
                dbResult = await VideoModel.get('GROUP BY v.Id ');
            }
            else if(orderBy === 'Likes'){
                dbResult = await VideoModel.get('GROUP BY v.Id ORDER BY liked desc');
            }
            else if(topic){
                dbResult = await VideoModel.get(`WHERE v.Topic = '${topic}' GROUP BY v.Id `)
            }
            console.log(dbResult)
            res.send({
                videos: dbResult
            })
        }
        catch(err){
            res.send({message: err.message})
        }
    },
    getById: async (req: Request, res: Response):Promise<any> => {
        try{
            const id = req.params.id
            const token = req.headers.authorization as string;
            const userId = await userModel.getIdToken(token)
            
            if(isNaN(Number(id))){
                throw new Error("Id invalid")
            }
            const dbResult = Number(userId) ? 
            await VideoModel.getById(Number(id), Number(userId)):
            await VideoModel.getById(Number(id));

            res.send({
                video: dbResult
            })
        }
        catch(err){
            res.send({message: err.message})
        }
    },
    favorite:  async (req: Request, res: Response):Promise<any> => {
        try{
            const token = req.headers.authorization as string;
            const userId = await userModel.getIdToken(token)
            if(!userId){
                throw new Error(`User Invalid`)
            }
            const id = req.params.id as string;
            const favorite = req.query.favorite as string;
            
            const dbResult = await videoModel.favorite(id, userId, Number(favorite) === 1);
            
            if(dbResult != 1){
                res.statusCode = 400;
                throw new Error("Favorite marked as I didn't like")
            }

            res.send({
                message: "Could not favorite/disfavor"
            })
            res.send({
                video: dbResult
            })
        }
        catch(err){
            res.send({message: err.message})
        }
    },
    getByFavoriteUser:  async (req: Request, res: Response):Promise<any> => {
        try{
            const token = req.headers.authorization as string;
            const userId = await userModel.getIdToken(token)
            if(!userId){
                req.statusCode = 400;
                throw new Error(`User Invalid`)
            }

            const dbResult = await VideoModel.getByFavoriteUser(userId);
          
            res.send({
                videos: dbResult
            })
        }
        catch(err){
            res.status(400).send({message: err.message})
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
            const dbResult = await VideoModel.like(id, userId, like);
            if(dbResult != 1){
                res.statusCode = 400;
                throw new Error("Video marked as I didn't like")
            }
            let messageSuccess =  "";
            if(like === 1)
                messageSuccess = "Video marked as I liked"
            else if(like === -1)
                messageSuccess = "Video marked as I disliked"
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