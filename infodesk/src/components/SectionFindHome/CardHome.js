import React, { useEffect, useState } from "react";
import { DivCardHome,DivHomeComments} from './styled'
import Comment from '../PostComment/PostComment'
import CardComment from '../Comment/CardCommentLevel1'
import {useRequestData} from '../../hooks/useRequestData'
import {usePostData} from '../../hooks/usePostData'

const FindHome = ({text, price, name, contact, Comments, typeAccommodation, id}) => {
    const [comments, getComments] = useRequestData(`/post/comment1/${id}`, [], 'comments1')
    const [postComments, loading, success] = usePostData(`/post/comment1/${id}`)
    
   
    const [textComment, setTextComment] = useState("")
    
    const onClickCancel = () =>{
        setTextComment("")
    }
    const onClickComment = () =>{
        postComments({text: textComment})
    }
    useEffect(() => {
        if(!loading){
            getComments()
        }
    }, [loading])
    return (
        <>
        <DivCardHome>
            <div className="text">
                <div>
                    <h3>{typeAccommodation}</h3>
                    <h3>{price} €</h3>
                </div>
                <div>
                   <p>
                       {text}
                   </p>
                </div>
            </div>
            <div  className="contact">
                <div>
                    <h3>Name</h3>
                    <p>{name}</p>
                </div>
                <div>
                    <h3>Contact</h3>
                    <p>{contact}</p>
                </div>
            </div>
        </DivCardHome>
       <Comment
       onClickComment={onClickComment}
       onClickCancel={onClickCancel}
       onChange={(e) => setTextComment(e.target.value)}
        value={textComment}
       />
       
        <DivHomeComments>
            {comments.map((comments)=>{
                return  <CardComment 
                name={comments.Name} 
                text={comments.Text} 
                likes={comments.Likes}
                disLikes={comments.DisLikes}
                 myLike={comments.myLike} 
                 id={comments.Id}
                 update={getComments}
                 />
            })}
        </DivHomeComments>
        </>
    )
};

export default FindHome;
