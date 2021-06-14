import React, { useEffect, useState } from "react";
import { DivCardHome, DivHomeComments } from './styled'
import Comment from '../PostComment/PostComment'
import CardComment from '../Comment/CardCommentLevel1'
import { useRequestData } from '../../hooks/useRequestData'
import { usePostData } from '../../hooks/usePostData'
import { LikedSaved, ArrowDown } from '../../GlobalStyle'
import { ThumbDownOutlined, ThumbUpAltOutlined, ThumbDown, ThumbUp } from '@material-ui/icons'
import { KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from '@material-ui/icons'
import { useDelDate } from '../../hooks/useDelDate'
import maskDate from '../../constants/maskDate'
const FindHome = ({ id, title, userName, date, text, topic, likes, myLike, update, myComment }) => {
    const [comments, getComments] = useRequestData(`/story/comment1/${id}`, [], 'comments1')
    const [storyComments, snackComment, loadingComment, successComment, notLoggedInComment] = usePostData(`/story/comment1/${id}`)

    const [postLike, snackLike, loadingLike, successLike, notLoggedInLike] = usePostData(`/story/${id}/like?like=`)
    const [textComment, setTextComment] = useState("")
    const [showButtonDelete, setShowButtonDelete] = useState(false)
    const [dataDel, loadingDel, successDel] = useDelDate(`/story`)

    const [showComments, setShowComments] = useState(false)

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
        if (!loadingLike && successLike) {
            update()
        }
    }, [loadingLike])
    useEffect(() => {
        if (!loadingDel && successDel){
           setShowButtonDelete(false)
           update()
        }
    }, [loadingDel])
    return (
        <>
            <DivCardHome>
                {notLoggedInComment || notLoggedInLike}
                <div className="mainAvatar">
                    <div className="avatar">

                    </div>
                </div>

                <div className="contentPost">
                    <div className="userName">
                        <p>{userName}</p>
                        <p>{maskDate(date)}</p>
                    </div>
                    <div className="contentText">
                        <div className="text">
                            
                        <div className="delete">
                        {myComment === 1 &&
                            <>
                                <MoreHoriz onClick={() => setShowButtonDelete(!showButtonDelete)} />
                                {showButtonDelete && 
                                <button onClick={() => dataDel(id)}>Delete</button>}
                            </>}
                    </div>
                            <div>
                                <h3>{title}</h3>
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
                            {myLike === 1 ? <ThumbUp onClick={() => postLike({},0)} /> :
                                <ThumbUpAltOutlined onClick={() => postLike({},1)} />}
                            {myLike === 0 ? <ThumbDown onClick={() => postLike({},0)} /> :
                                <ThumbDownOutlined onClick={() => postLike({},-1)} />}
                            <p>{likes}</p>
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
            {
                comments.length > 0 && (
                    showComments ?
                        <ArrowDown onClick={() => setShowComments(false)}><KeyboardArrowUp />Hide comments</ArrowDown> :
                        <ArrowDown onClick={() => setShowComments(true)}><KeyboardArrowDown />Show comments</ArrowDown>
                )
            }
            <DivHomeComments>
                {showComments && comments.map((comments) => {
                    return <CardComment
                        name={comments.UserName}
                        text={comments.Text}
                        likes={comments.Likes}
                        disLikes={comments.DisLikes}
                        myLike={comments.myLike}
                        id={comments.Id}
                        update={getComments}
                        type={"story"}
                        myComment={comments.MyComment}
                        date={comments.Date}
                    />
                })}
            </DivHomeComments>
        </>
    )
};

export default FindHome;
