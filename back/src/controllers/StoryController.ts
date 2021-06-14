import {Request, Response} from 'express'
import StoryModel from '../model/StoryModel'
import userModel from '../model/userModel'
import story from '../types/story'

const classController = {
    get: async (req: Request, res: Response):Promise<any> => {
        try{    
            const token = req.headers.authorization as string;
            const UserId =token? await userModel.getIdToken(token): false;
            const topics = ['Documentation',
            'Culture',
            'Find_a_roommate',
            'Student_loan', 'Banks',
            'Law',
            'Work',
            'Bureaucracy',
            'Daily_basis_en_the_NL',
            'Transportation']

            const {date, noData, order, word} = req.query;
            let where = "";
            topics.forEach((item)=>{
                if(req.query[item]){
                    where += `#s.Topic = '${item.replace(/_/gi, " ")}'#`;
                }
            })
               
            where = where.replace(/##/gi, " or ");
            where = where.replace('#', "(");
            where = where.replace('#', ")");
            
             where += where ?
             (date && !noData ? `and  (DATE_FORMAT(s.Date,'%Y-%m-%d') 
             LIKE '${date}')`: ''):
             (date && !noData? ` (DATE_FORMAT(s.Date,'%Y-%m-%d') 
             LIKE '${date}')`: '')

             where += where ?
             (word ? `and  (s.Text LIKE '%${word}%' or s.Title LIKE '%${word}%' or r.UserName LIKE '%${word}%')`: ''):
             (word ? ` (s.Text LIKE '%${word}%' or s.Title LIKE '%${word}%' or r.UserName LIKE '%${word}%')`: '')
             
            let orderBy = (order ===  'liked') ? 'Likes DESC, s.Date DESC':(
            (order ===  'disLiked') ? 'Likes ASC, s.Date DESC':'');
            console.log(req.query)
            const dbResult = Number(UserId) ? await StoryModel.get(where, orderBy, UserId):
            await StoryModel.get(where, orderBy)

            console.log(dbResult)

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
            let {date,title,text, topic}:story = req.body;
            const currentDate = new Date();
            
            if(!title || typeof(title) != "string"){
                throw new Error("Title invalid")
            }
            if(!topic || typeof(topic) != "string"){
                throw new Error("Topic invalid")
            }
            if(!text || typeof(text) != "string"){
                throw new Error("Text invalid")
            }


            date = date || `${currentDate.toLocaleString("fr-CA").slice(0, 10)} ${currentDate.toTimeString().slice(0, 8)}`
          
            const dbResult = await StoryModel.create({userId, date, title, text, topic});
            console.log(dbResult)
            if(dbResult != 1){
                throw new Error("Story not inserted")
            }
            res.send({
                message: "Story inserted"
            })
        }
        catch(err){
            res.status(400).send({message: err.message})
        }
    },
    like: async (req: Request, res: Response):Promise<any> => {
        try{
            console.log("Aqio")
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
    },
    del: async (req: Request, res: Response): Promise<any> => {
        try {
            console.log("Cheguei")
            const token = req.headers.authorization as string;
            const userId = await userModel.getIdToken(token)

            const id = req.params.id as string;
            
            const dbResult = Number(userId)?
            await StoryModel.del(id, userId):
            await StoryModel.del(id)
            
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
export default classController 