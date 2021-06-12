import React, { useEffect, useState } from "react";
import { DivCardHome, DivHomeComments } from './styled'
import Comment from '../PostComment/PostComment'
import CardComment from '../Comment/CardCommentLevel1'
import { useRequestData } from '../../hooks/useRequestData'
import { usePostData } from '../../hooks/usePostData'
import { LikedSaved, ArrowDown } from '../../GlobalStyle'
import { ThumbDownOutlined, ThumbUpAltOutlined, ThumbDown, ThumbUp, BookmarkBorder, Bookmark, FiberPin } from '@material-ui/icons'
import { KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from '@material-ui/icons'
import { useDelDate } from '../../hooks/useDelDate'

const FindHome = ({ id, title, userName, date, text, topic, disLikes, likes, myLike, save, update, myComment }) => {

    const [query, setQuery] = useState("");
    const [comments, getComments] = useRequestData(`/story/comment1/${id}`, [], 'comments1')
    const [storyComments, loadingComment, successComment] = usePostData(`/story/comment1/${id}`)
    const [like, setLike] = useState(myLike)
    const [postLike, loadingLike, successLike] = usePostData(`/story/${id}/like?like=${like}`)
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
        postLike();
    }, [like])
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
                            {myLike === 1 ? <ThumbUp onClick={() => setLike(0)} /> :
                                <ThumbUpAltOutlined onClick={() => setLike(1)} />}
                            {myLike === 0 ? <ThumbDown onClick={() => setLike(0)} /> :
                                <ThumbDownOutlined onClick={() => setLike(-1)} />}
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
                    />
                })}
            </DivHomeComments>
        </>
    )
};

export default FindHome;
