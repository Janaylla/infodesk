import express from 'express';
import Controller from '../controllers/Controller'

const Router = express.Router();
Router.get('/all', Controller.video.get)
Router.get('/favorite', Controller.video.getByFavoriteUser)
Router.put('/:id/like', Controller.video.like)

Router.get('/:id', Controller.video.getById)

Router.get('/comment1/:VideoId', Controller.videoComment.getLevel1)
Router.get('/comment2/:Comment1Id', Controller.videoComment.getLevel2)
Router.get('/comment3/:Comment2Id', Controller.videoComment.getLevel3)

Router.put('/comment1/:VideoId', Controller.videoComment.createLevel1)
Router.put('/comment2/:Comment1Id', Controller.videoComment.createLevel2)
Router.put('/comment3/:Comment2Id', Controller.videoComment.createLevel3)

Router.put('/comment1/:id/like', Controller.videoComment.likeLevel1)
Router.put('/comment2/:id/like', Controller.videoComment.likeLevel2)
Router.put('/comment3/:id/like', Controller.videoComment.likeLevel3)

Router.put('/:id/favorite', Controller.video.favorite)
// ?favorite=1 para s

export {Router as videoRouter}