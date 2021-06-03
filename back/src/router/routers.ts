import express from 'express';
import Controller from '../controllers/Controller'
const Router = express.Router();

Router.post('/login', Controller.user.login)
Router.get('/post/all', Controller.post.get)
Router.get('/post/:id', Controller.post.getById)
Router.put('/post/create', Controller.post.create)
Router.get('/test', Controller.user.test)


export default Router