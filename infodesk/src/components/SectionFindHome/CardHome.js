import React, { useEffect, useState } from "react";
import {ArrowDown} from '../../GlobalStyle'
import { DivCardHome, DivHomeComments } from './styled'
import Comment from '../PostComment/PostComment'
import CardComment from '../Comment/CardCommentLevel1'
import { useRequestData } from '../../hooks/useRequestData'
import { usePostData } from '../../hooks/usePostData'
import { useDelDate } from '../../hooks/useDelDate'
import {KeyboardArrowDown, KeyboardArrowUp, MoreHoriz} from '@material-ui/icons'
import maskDate from '../../constants/maskDate'

const FindHome = ({ text, userName, price, name, contact, typeAccommodation, id , date, myComment, update, address}) => {
    const [comments, getComments] = useRequestData(`/post/comment1/${id}`, [], 'comments1')
    const [postComments, snack, loading, success, notLoggedInPost] = usePostData(`/post/comment1/${id}`)

    const [showComments, setShowComments] = useState(false)
    
    const [textComment, setTextComment] = useState("")
    const [showButtonDelete, setShowButtonDelete] = useState(false)
    const [dataDel, loadingDel, successDel] = useDelDate(`/story`)

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
    
    useEffect(() => {
        if (!loadingDel && successDel){
           setShowButtonDelete(false)
           update()
        }
    }, [loadingDel])
    return (
        <>
            <DivCardHome>
                {notLoggedInPost}
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
                    {myComment === 1 &&
                            <>
                                <MoreHoriz onClick={() => setShowButtonDelete(!showButtonDelete)} />
                                {showButtonDelete && 
                                <button onClick={() => dataDel(id)}>Delete</button>}
                            </>}
                </div>
            </DivCardHome>
            <Comment
                onClickComment={onClickComment}
                onClickCancel={onClickCancel}
                onChange={(e) => setTextComment(e.target.value)}
                value={textComment}
            />
            
            {   
             comments.length>0 &&(
                showComments ?
               <ArrowDown onClick={() => setShowComments(false)}><KeyboardArrowUp/>Hide comments</ArrowDown>:
               <ArrowDown onClick={() => setShowComments(true)}><KeyboardArrowDown/>Show comments</ArrowDown>
            )
            }<DivHomeComments>
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
                        myComment={comments.MyComment}
                        date={comments.Date}
                    />
                })}
            </DivHomeComments>
        </>
    )
};

export default FindHome;
