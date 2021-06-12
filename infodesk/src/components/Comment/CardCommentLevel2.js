import React,{useState, useEffect} from "react";
import { DivCardComment, DivLike, Reply, ShowCommentsSmall, Title } from './styled'
import { ThumbDownOutlined, ThumbUpAltOutlined, ThumbDown, ThumbUp } from '@material-ui/icons'
import {usePostData} from '../../hooks/usePostData'
import {useRequestData} from '../../hooks/useRequestData'
import Comment from '../PostComment/PostComment'
import CardComment3 from './CardCommentLevel3'
import { KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from '@material-ui/icons'
import { useDelDate } from '../../hooks/useDelDate'

const CardComment = ({ text, name, likes, myLike, id, update, myComment, type }) => {
    const [like, setLike] = useState(myLike)
    const [postLike, loadingLike, successLike] = usePostData(`/${type}/comment2/${id}/like?like=${like}`)
    const [postComments, loadingComment, successComment] = usePostData(`/${type}/comment3/${id}`)
    const [comments, getComments3] = useRequestData(`/${type}/comment3/${id}`, [], 'comments3')
   
    const [showComments, setShowComments] = useState(false)
    const [commenting, setCommenting] = useState(false)
    const [textComment, setTextComment] = useState("")
    const [showButtonDelete, setShowButtonDelete] = useState(false)
    const [dataDel, loadingDel, successDel] = useDelDate(`/${type}/comment2`)
   
    const onClickLike = (lk) =>{
        setLike(lk)
    }
    const onClickCancel = () =>{
        setTextComment("")
        setCommenting(false)
    }
    const onClickComment = () =>{
        postComments({text: textComment})
    }
    useEffect(() =>{
        postLike()
    }, [like])

    useEffect(() =>{
        if(!loadingComment && successComment){
            getComments3()
        }
    }, [loadingComment])

    useEffect(() =>{
        getComments3()
    }, [id])

      useEffect(() =>{
        if(!loadingLike && successLike)
            update()
    }, [loadingLike])
    
    useEffect(() => {
        if (!loadingDel && successDel){
           setShowButtonDelete(false)
           update()
        }
    }, [loadingDel])
    
    return (
        <DivCardComment>
            <div className="avatar">
            </div>
            <div className="text">  
             <Title>
                    <h3>{name}</h3>
                    <div className="delete">
                        {myComment === 1 &&
                            <>
                                <MoreHoriz onClick={() => setShowButtonDelete(!showButtonDelete)} />
                                {showButtonDelete && <button onClick={() => dataDel(id)}>Delete</button>}
                            </>}
                    </div>
                </Title>
                    <p>{text}</p>
                <DivLike>
               
                    {myLike === 0?
                      <ThumbDown style={{ color: "white" }} onClick={() => onClickLike(0)}/> :
                    <ThumbDownOutlined style={{ color: "white" }}
                    onClick={() => onClickLike(-1)}/>
                    }
                  {myLike === 1?
                      <ThumbUp style={{ color: "white" }} 
                      onClick={() => onClickLike(0)} /> :
                    <ThumbUpAltOutlined style={{ color: "white" }}
                    onClick={() => onClickLike(1)}/>
                    }
                    <h6>{likes}</h6>
                     {!commenting &&
                       <Reply onClick={() => setCommenting(true)}>Reply</Reply>
                    } 
                    
                </DivLike>
                {
                    comments.length > 0 && (
                        showComments ?
                            <ShowCommentsSmall onClick={() => setShowComments(false)}><KeyboardArrowUp />Hide comments</ShowCommentsSmall> :
                            <ShowCommentsSmall onClick={() => setShowComments(true)}><KeyboardArrowDown />Show comments</ShowCommentsSmall>
                    )
                }
                {commenting && <Comment
                        onClickComment={onClickComment}
                        onClickCancel={onClickCancel}
                        onChange={(e) => setTextComment(e.target.value)}
                        value={textComment}
                        />}
                        { showComments && comments.map((comments2) =>{
                        return  <CardComment3
                        name={comments2.UserName} 
                        text={comments2.Text} 
                        likes={comments2.Likes}
                        disLikes={comments2.DisLikes}
                         myLike={comments2.myLike} 
                         id={comments2.Id}
                         update={getComments3}
                         type={type}
                         myComment={comments2.MyComment}
                         />
                    })
                    }
            </div>

        </DivCardComment>
    )
};

export default CardComment;
