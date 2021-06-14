import {Request, Response} from 'express'
import { isNumber } from 'util'
import postModel from '../model/PostModel'
import userModel from '../model/userModel'
import post from '../types/post'

const postController = {
    get: async (req: Request, res: Response):Promise<any> => {
        try{
            const {room, studio, apartment, date, noData, word} = req.query;
            const token = req.headers.authorization as string;
            const userId = await userModel.getIdToken(token)
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

             where += where ?
             (word ? `and  (p.Text LIKE '%${word}%' or r.UserName LIKE '%${word}%')`: ''):
             (word ? ` (p.Text LIKE '%${word}%' or r.UserName LIKE '%${word}%')`: '')
            console.log(word, where)
             
            const dbResult:[] = userId ? await postModel.get(where):
            await postModel.get(where, userId)
            
           
            console.log(dbResult)
            res.send({
                posts: dbResult
            })
        }
        catch(err){
            res.status(400).send({message: err.message})
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
            console.log(dbResult)
            res.send({
                posts: dbResult
            })
        }
        catch(err){
            res.status(400).send({message: err.message})
        }
    },
    create: async (req: Request, res: Response):Promise<any> => {
        try{
            const token = req.headers.authorization as string;
            const userId = await userModel.getIdToken(token)
            let {description, date, price, accommodation, address}:post = req.body;
            const currentDate = new Date();
            if(!description || typeof(description) != "string"){
                throw new Error("Description invalid")
            }
            if(!accommodation || typeof(accommodation) != "string"){
                throw new Error("Accommodation invalid")
            }
            if(typeof(price) != "string"){
                throw new Error("Price invalid")
            }
            price = price.replace(',', '.')
            if(!Number(price) || Number(price) <= 0){
                throw new Error("Price invalid")
            }
            if(!address || typeof(address) != "string"){
                throw new Error("Address invalid")
            }
            date = date || `${currentDate.toLocaleString("fr-CA").slice(0, 10)} ${currentDate.toTimeString().slice(0, 8)}`
           

            const dbResult = await postModel.create({ address, userId, description, date, price, accommodation});
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
            res.status(400).send({message: err.message})
        }
    },
    del: async (req: Request, res: Response): Promise<any> => {
        try {
            const token = req.headers.authorization as string;
            const userId = await userModel.getIdToken(token)

            const id = req.params.id as string;
            const dbResult = await postModel.del(id, userId)
            console.log(dbResult)
            if(dbResult !== 1){
                throw new Error("Comment not delete");
            }
            res.send({
                message: "Comment deleted"
            })
        }
        catch (err) {
            res.status(400).send({ message: err.message })
        }
    }
} 
export default postController 