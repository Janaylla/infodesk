import Router from './router/routers';
import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import jwt from 'jsonwebtoken'
import {config} from "dotenv";
import knex from "knex";

const server = express()
server.use(express.json())
server.use(cors())
server.use(Router)

server.use(express.json());

server.use(cors());

config();

 const app = server.listen(process.env.PORT || 3003, () => {
    if (app) {
       const address = app.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
