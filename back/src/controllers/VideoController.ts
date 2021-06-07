import {Request, Response} from 'express'
import VideoModel from '../model/VideoModel'
import userModel from '../model/userModel'
import videoModel from '../model/VideoModel';

const classController = {
    get: async (req: Request, res: Response):Promise<any> => {
        try{
            const dbResult = await VideoModel.get();

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

            if(isNaN(Number(id))){
                throw new Error("Id invalid")
            }
            const dbResult = await VideoModel.getById(Number(id));

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
            
            console.log(userId, favorite)
            const dbResult = await videoModel.favorite(id, userId, Number(favorite) === 1);
            console.log(dbResult)
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
            console.log("Cheguei")
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
    }
} 
export default classController 