import express from 'express';
import Controller from '../controllers/Controller'
const Router = express.Router();

Router.post('/login', Controller.user.login)
Router.post('/singUp', Controller.user.create)
Router.get('/user', Controller.user.getById)

export {Router as userRouter}