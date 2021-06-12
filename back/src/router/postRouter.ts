import express from 'express';
import Controller from '../controllers/Controller'

const Router = express.Router();

Router.get('/all', Controller.post.get)
Router.get('/my', Controller.post.getByUserId)
Router.get('/:id', Controller.post.getById)
Router.get('/comment1/:PostId', Controller.postComment.getLevel1)
Router.get('/comment2/:Comment1Id', Controller.postComment.getLevel2)
Router.get('/comment3/:Comment2Id', Controller.postComment.getLevel3)
Router.put('/create', Controller.post.create)
Router.put('/comment1/:PostId', Controller.postComment.createLevel1)
Router.put('/comment2/:Comment1Id', Controller.postComment.createLevel2)
Router.put('/comment3/:Comment2Id', Controller.postComment.createLevel3)
Router.put('/comment1/:id/like', Controller.postComment.likeLevel1)
Router.put('/comment2/:id/like', Controller.postComment.likeLevel2)
Router.put('/comment3/:id/like', Controller.postComment.likeLevel3)

Router.delete('/comment3/:id', Controller.postComment.delLevel3)
Router.delete('/comment2/:id', Controller.postComment.delLevel2)
Router.delete('/comment1/:id', Controller.postComment.delLevel1)
Router.delete('/:id', Controller.post.del)

export {Router as postRouter}