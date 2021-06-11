import {Request, Response} from 'express'
import postModel from '../model/PostModel'
import userModel from '../model/userModel'
import post from '../types/post'

const classController = {
    get: async (req: Request, res: Response):Promise<any> => {
        try{
            const {room, studio, apartment, date, noData} = req.query;
            let where = "";
            where += room ? "# p.typeOfAccommodation ='room'#":''
            where += studio ?"# p.typeOfAccommodation ='studio'#":''
            where += apartment ?"# p.typeOfAccommodation ='apartment'#":''

            
            where = where.replace(/##/gi, " or ");
            where = where.replace('#', "(");
            where = where.replace('#', ")");
             where += where ?
             (date && !noData ? `and p.Date='${date}'`: ''):
             (date && !noData? `p.Date = '${date}'`: '')
             
            const dbResult:[] = await postModel.get(where);

           
            console.log(where)
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
    getByUserId: async (req: Request, res: Response):Promise<any> => {
        try{

            const token = req.headers.authorization as string;
            const userId = await userModel.getIdToken(token)
            if(isNaN(userId)){
                throw new Error("Token invalid")
            }
            const dbResult = await postModel.getByUserId(userId);
            res.send({
                posts: dbResult
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
            let {description, date, price, accommodation}:post = req.body;
            const currentDate = new Date();
            
            date = date || `${currentDate.toLocaleString("fr-CA").slice(0, 10)} ${currentDate.toTimeString().slice(0, 8)}`
        

            const dbResult = await postModel.create({userId, description, date, price, accommodation});
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