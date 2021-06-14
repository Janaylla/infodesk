import React, { useEffect, useState } from "react";
import { DivCardHome, DivHomeComments } from './styled'
import Comment from '../../PostComment/PostComment'
import CardComment from '../../Comment/CardCommentLevel1'
import { useRequestData } from '../../../hooks/useRequestData'
import { usePostData } from '../../../hooks/usePostData'
import { KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from '@material-ui/icons'
import { LikedSaved, ArrowDown } from '../../../GlobalStyle'
import maskDate from '../../../constants/maskDate'
const FindHome = ({ text, userName, price, name, contact, typeAccommodation, id, date, address }) => {
    const [comments, getComments] = useRequestData(`/post/comment1/${id}`, [], 'comments1')
    const [postComments, snack, loading, success] = usePostData(`/post/comment1/${id}`)
    const [showComments, setShowComments] = useState(false)


    const [textComment, setTextComment] = useState("")

    const onClickCancel = () => {
        setTextComment("")
    }
    const onClickComment = () => {
        postComments({ text: textComment })
    }
    useEffect(() => {
        if (!loading && success) {
            getComments()
            setTextComment("")
        }
    }, [loading])
    useEffect(() => {
        getComments()
    }, [id])
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
                        <p>{maskDate(date)}</p>
                    </div>
                    <div className="contentText">
                        <div className="text">
                            <div>
                                <h3>{typeAccommodation}</h3>
                                <h3>{price} €</h3>
                                <h3>{address}</h3>
                            </div>
                            <div>
                                <p>
                                    {text}
                                </p>
                            </div>
                        </div>
                        <div className="contact">
                            <div>
                                <h3>Name</h3>
                                <p>{name}</p>
                            </div>
                            <div>
                                <h3>Contact</h3>
                                <p>{contact}</p>
                            </div>
                        </div>
                    </div>
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
                        type={"post"}
                    />
                })}
            </DivHomeComments>
        </>
    )
};

export default FindHome;
