import UserController from './UserController' 
import PostController from './PostController'
import VideoController from './VideoController'
import PostCommentController from './PostCommentController'
import VideoCommentController from './VideoCommentController'
const Controller = {
    user: UserController,
    post: PostController,
    postComment: PostCommentController,
    video: VideoController,
    videoComment: VideoCommentController,
}

export default Controller