import React,{useState, useEffect} from "react";
import { DivCardComment, DivLike } from './styled'
import { ThumbDownOutlined, ThumbUpAltOutlined, ThumbDown, ThumbUp } from '@material-ui/icons'
import {usePostData} from '../../hooks/usePostData'

const CardComment = ({ text, name, likes, myLike, id, update, disLikes }) => {
    const [like, setLike] = useState(myLike)
    const [postLike, loading, success] = usePostData(`/post/comment1/${id}/like?like=${like}`)

    const onClickLike = (lk) =>{
        setLike(lk)
    }
    useEffect(() =>{
        postLike()
    }, [like])
    useEffect(() =>{
        if(!loading && success)
            update()
    }, [loading])
    return (
        <DivCardComment>
            <div className="avatar">
            </div>
            <div className="text">
                <h3>{name}</h3>
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
                    
                    <p>Reply</p>
                    <h6>{likes - disLikes}</h6>
                </DivLike>
            </div>

        </DivCardComment>
    )
};

export default CardComment;
