import {postRouter} from './router/postRouter'
import {videoRouter} from './router/videoRouter'
import {userRouter} from './router/userRouter'
import {storyRouter} from './router/storyRouter'
import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import {config} from "dotenv";

const server = express()
server.use(express.json())
server.use(cors());

server.use("/post", postRouter)
server.use("/video", videoRouter)
server.use("/", userRouter)
server.use("/story", storyRouter)

config();

 const app = server.listen(process.env.PORT || 3003, () => {
    if (app) {
       const address = app.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
