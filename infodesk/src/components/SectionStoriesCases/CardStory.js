import React, { useEffect, useState } from "react";
import { DivCardHome, DivHomeComments } from './styled'
import Comment from '../PostComment/PostComment'
import CardComment from '../Comment/CardCommentLevel1'
import { useRequestData } from '../../hooks/useRequestData'
import { usePostData } from '../../hooks/usePostData'
import {LikedSaved} from '../../GlobalStyle'
import {ThumbDownOutlined, ThumbUpAltOutlined, ThumbDown, ThumbUp, BookmarkBorder, Bookmark, FiberPin } from '@material-ui/icons'

const FindHome = ({id, title, userName, date, text, topic, disLikes, likes, myLike, save, update}) => {

    const [comments, getComments] = useRequestData(`/story/comment1/${id}`, [], 'comments1')
    const [storyComments, loadingComment, successComment] = usePostData(`/story/comment1/${id}`)
    const [like, setLike] = useState(myLike)
    const [postLike, loadingLike, successLike] = usePostData(`/story/${id}/like?like=${like}`) 
    const [textComment, setTextComment] = useState("")

    const onClickCancel = () => {
        setTextComment("")
    }
    const onClickComment = () => {
        storyComments({ text: textComment })
    }
    useEffect(() => {
        if (!loadingComment && successComment) {
            getComments()
            setTextComment("")
        }
    }, [loadingComment])
    useEffect(() => {
            getComments()
    }, [id])
    useEffect(() => {
        postLike();
    }, [like])
    useEffect(() => {
        if(!loadingLike && successLike){
            update()
        }
    }, [loadingLike])
    return (
        <>
            <DivCardHome>
                <div className="mainAvatar">
                    <div className="avatar">
                    
                    </div>
                </div>

                <div className="contentPost">
                    <div className="userName">
                        <p>{userName}</p> 
                        <p>{date}</p> 
                    </div>
                    <div className="contentText">
                        <div className="text">
                            <div>
                                <h3>{title}{topic}</h3>
                                <h2>{topic}</h2>
                            </div>
                            <div>
                                <p>
                                    {text}
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    <LikedSaved>
                            <div className="likes">
                               {myLike === 1 ? <ThumbUp onClick={() => setLike(0)}/>:
                               <ThumbUpAltOutlined onClick={() => setLike(1)} />}
                                 {myLike === 0 ? <ThumbDown onClick={() => setLike(0)} />:
                                 <ThumbDownOutlined onClick={() => setLike(-1)} />}
                                <p>{likes - disLikes}</p>
                            </div>
                            <div className="save">
                                {save ?<Bookmark /> 
                                :<BookmarkBorder  />}
                            </div>
                        </LikedSaved>
                </div>
            </DivCardHome>
            <Comment
                onClickComment={onClickComment}
                onClickCancel={onClickCancel}
                onChange={(e) => setTextComment(e.target.value)}
                value={textComment}
            />

            <DivHomeComments>
               {comments.map((comments) => {
                    return <CardComment
                        name={comments.UserName}
                        text={comments.Text}
                        likes={comments.Likes}
                        disLikes={comments.DisLikes}
                        myLike={comments.myLike}
                        id={comments.Id}
                        update={getComments}
                        type={"story"}
                    />
                })} 
            </DivHomeComments>
        </>
    )
};

export default FindHome;
