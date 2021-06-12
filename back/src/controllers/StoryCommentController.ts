import { Request, Response } from 'express'
import StoryModel from '../model/StoryModel'
import userModel from '../model/userModel'
import StoryCommentModel from '../model/StoryCommentModel'
import comment from '../types/comment'

const classController = {
    createLevel1: async (req: Request, res: Response): Promise<any> => {
        try {
            const token = req.headers.authorization as string;
            const userId = await userModel.getIdToken(token)
            let { text, date }: comment = req.body;
            const currentDate = new Date();

            date = date || `${currentDate.toLocaleString("fr-CA").slice(0, 10)} ${currentDate.toTimeString().slice(0, 8)}`

            const dbResult = await StoryCommentModel.create({ userId, text, date }, "Storieslevelcomments1", "StoryId", req.params.StoryId as string);

            console.log(dbResult)

            if (dbResult != 1) {
                res.statusCode = 400;
                throw new Error("Comment not inserted")
            }
            res.send({
                message: "Comment inserted"
            })
        }
        catch (err) {
            res.send({ message: err.message })
        }
    },
    createLevel2: async (req: Request, res: Response): Promise<any> => {
        try {
            const token = req.headers.authorization as string;
            const userId = await userModel.getIdToken(token)
            let { text, date }: comment = req.body;
            const currentDate = new Date();

            date = date || `${currentDate.toLocaleString("fr-CA").slice(0, 10)} ${currentDate.toTimeString().slice(0, 8)}`

            const dbResult = await StoryCommentModel.create({ userId, text, date }, "Storieslevelcomments2", "Comment1Id", req.params.Comment1Id as string);

            console.log(dbResult)
            if (dbResult != 1) {
                res.statusCode = 400;
                throw new Error("Comment not inserted")
            }
            res.send({
                message: "Comment inserted"
            })
        }
        catch (err) {
            res.send({ message: err.message })
        }
    },
    createLevel3: async (req: Request, res: Response): Promise<any> => {
        try {
            const token = req.headers.authorization as string;
            const userId = await userModel.getIdToken(token)
            let { text, date }: comment = req.body;
            const currentDate = new Date();

            date = date || `${currentDate.toLocaleString("fr-CA").slice(0, 10)} ${currentDate.toTimeString().slice(0, 8)}`

            const dbResult = await StoryCommentModel.create({ userId, text, date }, "Storieslevelcomments3", "Comment2Id", req.params.Comment2Id as string);

            console.log(dbResult)
            if (dbResult != 1) {
                res.statusCode = 400;
                throw new Error("Comment not inserted")
            }
            res.send({
                message: "Comment inserted"
            })
        }
        catch (err) {
            res.send({ message: err.message })
        }
    },
    likeLevel1: async (req: Request, res: Response): Promise<any> => {
        try {
            const token = req.headers.authorization as string;
            const userId = await userModel.getIdToken(token)

            if (!userId) {
                throw new Error(`User Invalid`)
            }
            const id = req.params.id as string;
            let like = req.query.like as string | number;

            like = (Number(like) === 1 || Number(like) === -1) ? Number(like) : 0;

            const dbResult = await StoryCommentModel.like(id, userId, like, "likeStorieslevelcomments1", "Comment1Id")

            if (dbResult != 1) {
                res.statusCode = 400;
                throw new Error("Comment not marked")
            }
            let messageSuccess = "";
            if (like === 1)
                messageSuccess = "Comment marked as I liked"
            else if (like === -1)
                messageSuccess = "Comment marked as I disliked"
            else
                messageSuccess = "Demarcated like or dislike"

            res.send({
                message: messageSuccess
            })
        }
        catch (err) {
            res.send({ message: err.message })
        }
    },
    likeLevel2: async (req: Request, res: Response): Promise<any> => {
        try {
            const token = req.headers.authorization as string;
            const userId = await userModel.getIdToken(token)

            if (!userId) {
                throw new Error(`User Invalid`)
            }
            const id = req.params.id as string;
            let like = req.query.like as string | number;

            like = (Number(like) === 1 || Number(like) === -1) ? Number(like) : 0;

            const dbResult = await StoryCommentModel.like(id, userId, like, "likeStorieslevelcomments2", "Comment2Id")

            if (dbResult != 1) {
                res.statusCode = 400;
                throw new Error("Comment not marked")
            }
            let messageSuccess = "";
            if (like === 1)
                messageSuccess = "Comment marked as I liked"
            else if (like === -1)
                messageSuccess = "Comment marked as I disliked"
            else
                messageSuccess = "Demarcated like or dislike"

            res.send({
                message: messageSuccess
            })
        }
        catch (err) {
            res.send({ message: err.message })
        }
    },
    likeLevel3: async (req: Request, res: Response): Promise<any> => {
        try {
            const token = req.headers.authorization as string;
            const userId = await userModel.getIdToken(token)

            if (!userId) {
                throw new Error(`User Invalid`)
            }
            const id = req.params.id as string;
            let like = req.query.like as string | number;

            like = (Number(like) === 1 || Number(like) === -1) ? Number(like) : 0;

            const dbResult = await StoryCommentModel.like(id, userId, like, "likeStorieslevelcomments3", "Comment3Id")

            if (dbResult != 1) {
                res.statusCode = 400;
                throw new Error("Comment not marked")
            }
            let messageSuccess = "";
            if (like === 1)
                messageSuccess = "Comment marked as I liked"
            else if (like === -1)
                messageSuccess = "Comment marked as I disliked"
            else
                messageSuccess = "Demarcated like or dislike"

            res.send({
                message: messageSuccess
            })
        }
        catch (err) {
            res.send({ message: err.message })
        }
    },
    getLevel1: async (req: Request, res: Response): Promise<any> => {
        try {
            const token = req.headers.authorization as string;
            const userId = await userModel.getIdToken(token)

            const StoryId = req.params.StoryId as string;
            const dbResult = Number(userId) ?
                await StoryCommentModel.getLevel1(StoryId, userId) :
                await StoryCommentModel.getLevel1(StoryId)

            res.send({
                comments1: dbResult
            })
        }
        catch (err) {
            res.send({ message: err.message })
        }
    },
    getLevel2: async (req: Request, res: Response): Promise<any> => {
        try {
            const token = req.headers.authorization as string;
            const userId = await userModel.getIdToken(token)

            const Comment1Id = req.params.Comment1Id as string;
            const dbResult = Number(userId) ?
                await StoryCommentModel.getLevel2(Comment1Id, userId) :
                await StoryCommentModel.getLevel2(Comment1Id)

            res.send({
                comments2: dbResult
            })
        }
        catch (err) {
            res.send({ message: err.message })
        }
    },
    getLevel3: async (req: Request, res: Response): Promise<any> => {
        try {
            const token = req.headers.authorization as string;
            const userId = await userModel.getIdToken(token)

            const Comment2Id = req.params.Comment2Id as string;
            const dbResult = Number(userId) ?
                await StoryCommentModel.getLevel3(Comment2Id, userId) :
                await StoryCommentModel.getLevel3(Comment2Id)

            res.send({
                comments3: dbResult
            })
        }
        catch (err) {
            res.send({ message: err.message })
        }
    },
    delLevel1: async (req: Request, res: Response): Promise<any> => {
        try {
            const token = req.headers.authorization as string;
            const userId = await userModel.getIdToken(token)

            const id = req.params.id as string;
            const dbResult = await StoryCommentModel.delLevel1(id, userId)
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
    },
    delLevel2: async (req: Request, res: Response): Promise<any> => {
        try {
            const token = req.headers.authorization as string;
            const userId = await userModel.getIdToken(token)

            const id = req.params.id as string;
            const dbResult = await StoryCommentModel.delLevel2(id, userId)
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
    },
    delLevel3: async (req: Request, res: Response): Promise<any> => {
        try {
            const token = req.headers.authorization as string;
            const userId = await userModel.getIdToken(token)

            const id = req.params.id as string;
            const dbResult = await StoryCommentModel.delLevel3(id, userId)
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