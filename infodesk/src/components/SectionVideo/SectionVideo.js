import React,{useState, useEffect} from "react";
import { DivSection, Title, DivHomeComments} from './styled'
import {AccessTime} from '@material-ui/icons'
import Comment from '../PostComment/PostComment'
import {useParams} from 'react-router-dom'
import {useRequestData} from '../../hooks/useRequestData'
import {usePostData} from '../../hooks/usePostData'
import CardComment from '../Comment/CardCommentLevel1'
const SectionVideo = () => {
    const { id } = useParams();
    const [comments, getComments] = useRequestData(`/video/comment1/${id}`, [], 'comments1')
    const [videoComments, loading, success] = usePostData(`/video/comment1/${id}`)
    
   
    const [textComment, setTextComment] = useState("")
    
    const onClickCancel = () =>{
        setTextComment("")
    }
    const onClickComment = () =>{
        videoComments({text: textComment})
    }
    useEffect(() => {
        if(!loading && success){
            getComments()
            setTextComment("")
        }
    }, [loading])
      const [video, getVideo] = useRequestData(`/video/${id}`, {}, 'video')

    return (
        <DivSection>
            {video && video.Url && <>
                <video src={`/videos/${video.Url}`} controls autoplay></video>
            <Title>
                <h2>{video.Title}</h2>
                <h3><AccessTime/>{video.Date}</h3>
            </Title>
            </>}
            
       <Comment
       onClickComment={onClickComment}
       onClickCancel={onClickCancel}
       onChange={(e) => setTextComment(e.target.value)}
        value={textComment}
       />
       
        <DivHomeComments>
             {comments.map((comments)=>{
                return  <CardComment 
                name={comments.UserName} 
                text={comments.Text} 
                likes={comments.Likes}
                disLikes={comments.DisLikes}
                 myLike={comments.myLike} 
                 id={comments.Id}
                 update={getComments}
                 type={"video"}
                 />
             })
            }
            
        </DivHomeComments>
        </DivSection>
    )
};

export default SectionVideo;
