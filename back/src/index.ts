import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import {userRoute} from './Router/userRouter'
import jwt from 'jsonwebtoken'
import {config} from "dotenv";

const app = express();
app.use(express.json());
app.use("/", userRoute);

app.use(cors());


config();
app.post('/teste', (req, res, next) => {
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


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

