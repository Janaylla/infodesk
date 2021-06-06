import express from 'express';
import Controller from '../controllers/Controller'
const Router = express.Router();

Router.post('/login', Controller.user.login)
Router.post('/singUp', Controller.user.create)
Router.get('/post/all', Controller.post.get)
Router.get('/post/:id', Controller.post.getById)
Router.get('/post/comment1/:PostId', Controller.postComment.getLevel1)
Router.get('/post/comment2/:Comment1Id', Controller.postComment.getLevel2)
Router.get('/post/comment3/:Comment2Id', Controller.postComment.getLevel3)
Router.put('/post/create', Controller.post.create)
Router.put('/post/comment1/:PostId', Controller.postComment.createLevel1)
Router.put('/post/comment2/:Comment1Id', Controller.postComment.createLevel2)
Router.put('/post/comment3/:Comment2Id', Controller.postComment.createLevel3)
Router.put('/post/comment1/:id/like', Controller.postComment.likeLevel1)
Router.put('/post/comment2/:id/like', Controller.postComment.likeLevel2)
Router.put('/post/comment3/:id/like', Controller.postComment.likeLevel3)
Router.put('/post/:id', Controller.post.like)

Router.get('/video/all', Controller.video.get)
Router.get('/video/:id', Controller.video.getById)
Router.get('/video/comment1/:VideoId', Controller.videoComment.getLevel1)
Router.get('/video/comment2/:Comment1Id', Controller.videoComment.getLevel2)
Router.get('/video/comment3/:Comment2Id', Controller.videoComment.getLevel3)

Router.put('/video/comment1/:VideoId', Controller.videoComment.createLevel1)
Router.put('/video/comment2/:Comment1Id', Controller.videoComment.createLevel2)
Router.put('/video/comment3/:Comment2Id', Controller.videoComment.createLevel3)

Router.put('/video/comment1/:id/like', Controller.videoComment.likeLevel1)
Router.put('/video/comment2/:id/like', Controller.videoComment.likeLevel2)
Router.put('/video/comment3/:id/like', Controller.videoComment.likeLevel3)



Router.get('/story/all', Controller.story.get)


export default Router