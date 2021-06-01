import express, {Response, Request} from 'express'
import {getPosts, isLogin} from '../Endpoints/userEndpoints'

 const route = express.Router()

 route.get("/posts", async (req:Request, res:Response) => {
    try {

        const user = await getPosts(req, res)
        res.status(200)
            .send({ users: user })

    } catch (err) {
        res
            .status(400)
            .send({ message: "Ops! Something is wrong. Try again later" })
    }
})


route.post("/login", async (req:Request, res:Response) => {
    try {
        const isLoginBool = await isLogin(req, res)
        res.status(200)
            .send({ confirm: isLoginBool==true })

    } catch (err) {
        res
            .status(400)
            .send({ message: "Ops! Something is wrong. Try again later" })
    }
})

export {route as userRoute} 