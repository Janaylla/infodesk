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

server.get('/teste', (req, res, next) => {
   const token:string = req.headers.authorization as string;
   

   if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
  
   jwt.verify(token, 'process.env.SECRET', (err:any, decoded:any):any => {
     if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
     
     res.status(200).json({ id: decoded.id })
     next();
   });

})
server.post('/teste', (req, res, next) => {
    //esse teste abaixo deve ser feito no seu banco de dados
    if(req.body.user === 'luiz' && req.body.pwd === '123'){
      //auth ok
      const id = 1; //esse id viria do banco de dados
      const token = jwt.sign({ id }, 'process.env.SECRET', {
        expiresIn: 300 // expires in 5min
      });
      return res.json({ auth: true, token: token });
    }
    
    res.status(500).json({message: 'Login inválido!'});
 })

 const app = server.listen(process.env.PORT || 3003, () => {
    if (app) {
       const address = app.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
