import UserController from './UserController' 
import PostController from './PostController'
import VideoController from './VideoController'
import StoryController from './StoryController'
import PostCommentController from './PostCommentController'
import VideoCommentController from './VideoCommentController'
const Controller = {
    user: UserController,
    post: PostController,
    postComment: PostCommentController,
    video: VideoController,
    videoComment: VideoCommentController,
    story: StoryController
}

export default Controller