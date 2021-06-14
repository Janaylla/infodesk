import React, { useState, useEffect } from "react";
import { DivSection, Title, DivHomeComments } from './styled'
import { AccessTime } from '@material-ui/icons'
import Comment from '../PostComment/PostComment'
import { useParams } from 'react-router-dom'
import { useRequestData } from '../../hooks/useRequestData'
import { usePostData } from '../../hooks/usePostData'
import CardComment from '../Comment/CardCommentLevel1'
import {ThumbDownOutlined, ThumbUpAltOutlined, ThumbDown, ThumbUp, BookmarkBorder, Bookmark, FiberPin } from '@material-ui/icons'
import {LikedSaved} from '../../GlobalStyle'
import maskDate from '../../constants/maskDate'

const SectionVideo = () => {
    const { id } = useParams();
    const [like, setLike] = useState()
    const [textComment, setTextComment] = useState("")
    const [comments, getComments] = useRequestData(`/video/comment1/${id}`, [], 'comments1')
    const [videoComments, snackComment, loading, success, notLoggedInComment] = usePostData(`/video/comment1/${id}`)
    const [postLike, snackLike,  loadingLike, successLike, notLoggedInLike] = usePostData(`/video/${id}/like?like=`) 
 
    const [video, getVideo] = useRequestData(`/video/${id}`, {}, 'video')

    const [postFavorite, snackFavorite, loadingFav, successFav, notLoggedInFavorite] = usePostData(`/video/${id}/favorite?favorite=`)



    const onClickCancel = () => {
        setTextComment("")
    }
    const onClickComment = () => {
        videoComments({ text: textComment })
    }

    useEffect(() => {
        if(!loadingLike && successLike){
            getVideo()
        }
    }, [loadingLike])

    useEffect(() => {
        if (!loading && success) {
            getComments()
            setTextComment("")
        }
    }, [loading])
    
    
    useEffect(() => {
        if(!loadingFav && successFav){
            getVideo()
        }
    }, [loadingFav])
    console.log(video)
    return (
        <DivSection>
            {notLoggedInLike || notLoggedInComment || notLoggedInFavorite}
            {video && video.Url && <>
                <video src={`/videos/${video.Url}`} controls autoplay></video>
                <LikedSaved>
                <div className="likes">
                    {video.MyLike === 1 ? <ThumbUp onClick={() => postLike({},0)} /> :
                        <ThumbUpAltOutlined onClick={() => postLike({},1)} />}
                    {video.MyLike === 0 ? <ThumbDown onClick={() => postLike({},0)} /> :
                        <ThumbDownOutlined onClick={() => postLike({},-1)} />}
                    <p>{video.Likes - video.DisLikes}</p>
                </div>
                <div className="save">
                    {video.Favorite ? <Bookmark onClick={() => postFavorite({},0)}/>
                        : <BookmarkBorder onClick={() => postFavorite({},1)} />}
                </div>
            </LikedSaved>
                <Title>
                    <h2>{video.Title}</h2>
                    <h3><AccessTime />{video.Date && maskDate(video.Date)}</h3>
                </Title>
            </>}
           
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
                        type={"video"}
                        myComment={comments.MyComment}
                        date={comments.Date}
                        
                    />
                })
                }

            </DivHomeComments>
        </DivSection>
    )
};

export default SectionVideo;
