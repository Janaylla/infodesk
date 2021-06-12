import express from 'express';
import Controller from '../controllers/Controller'

const Router = express.Router();

Router.get('/all', Controller.story.get)
Router.put('/:id/like', Controller.story.like)

Router.put('/create', Controller.story.create)

Router.get('/comment1/:StoryId', Controller.storyComment.getLevel1)
Router.get('/comment2/:Comment1Id', Controller.storyComment.getLevel2)
Router.get('/comment3/:Comment2Id', Controller.storyComment.getLevel3)
Router.put('/comment1/:StoryId', Controller.storyComment.createLevel1)
Router.put('/comment2/:Comment1Id', Controller.storyComment.createLevel2)
Router.put('/comment3/:Comment2Id', Controller.storyComment.createLevel3)
Router.put('/comment1/:id/like', Controller.storyComment.likeLevel1)
Router.put('/comment2/:id/like', Controller.storyComment.likeLevel2)
Router.put('/comment3/:id/like', Controller.storyComment.likeLevel3)

Router.delete('/comment3/:id', Controller.storyComment.delLevel3)
Router.delete('/comment2/:id', Controller.storyComment.delLevel2)
Router.delete('/comment1/:id', Controller.storyComment.delLevel1)
Router.delete('/:id', Controller.story.del)

export {Router as storyRouter}