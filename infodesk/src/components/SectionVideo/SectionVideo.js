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

const SectionVideo = () => {
    const { id } = useParams();
    const [like, setLike] = useState()
    const [textComment, setTextComment] = useState("")
    const [comments, getComments] = useRequestData(`/video/comment1/${id}`, [], 'comments1')
    const [videoComments, loading, success] = usePostData(`/video/comment1/${id}`)
    const [postLike, loadingLike, successLike] = usePostData(`/video/${id}/like?like=${like}`) 
 
    const [video, getVideo] = useRequestData(`/video/${id}`, {}, 'video')

    const [favorite, setFavorite] = useState()
    const [postFavorite, loadingFav, successFav] = usePostData(`/video/${id}/favorite?favorite=${favorite}`)



    const onClickCancel = () => {
        setTextComment("")
    }
    const onClickComment = () => {
        videoComments({ text: textComment })
    }
    useEffect(() => {
        postLike();
    }, [like])
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
        if(favorite === 1 || favorite === 0)
            postFavorite()
    }, [favorite])
    
    useEffect(() => {
        if(!loadingFav && successFav){
            getVideo()
        }
    }, [loadingFav])
    console.log(video)
    return (
        <DivSection>
            {video && video.Url && <>
                <video src={`/videos/${video.Url}`} controls autoplay></video>
                <LikedSaved>
                <div className="likes">
                    {video.MyLike === 1 ? <ThumbUp onClick={() => setLike(0)} /> :
                        <ThumbUpAltOutlined onClick={() => setLike(1)} />}
                    {video.MyLike === 0 ? <ThumbDown onClick={() => setLike(0)} /> :
                        <ThumbDownOutlined onClick={() => setLike(-1)} />}
                    <p>{video.Likes - video.DisLikes}</p>
                </div>
                <div className="save">
                    {video.Favorite ? <Bookmark onClick={() => setFavorite(0)}/>
                        : <BookmarkBorder onClick={() => setFavorite(1)} />}
                </div>
            </LikedSaved>
                <Title>
                    <h2>{video.Title}</h2>
                    <h3><AccessTime />{video.Date}</h3>
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
                    />
                })
                }

            </DivHomeComments>
        </DivSection>
    )
};

export default SectionVideo;
