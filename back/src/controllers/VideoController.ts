import {Request, Response} from 'express'
import VideoModel from '../model/VideoModel'
import userModel from '../model/userModel'

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
    }
} 
export default classController 