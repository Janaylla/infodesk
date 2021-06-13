import React, { useState, useEffect } from "react";
import { DivCardComment, DivLike, Title } from './styled'
import { ThumbDownOutlined, ThumbUpAltOutlined, ThumbDown, ThumbUp, MoreHoriz } from '@material-ui/icons'
import { usePostData } from '../../hooks/usePostData'

import { useDelDate } from '../../hooks/useDelDate'

const CardComment = ({ text, name, likes, myLike, id, update, type, myComment }) => {
    const [like, setLike] = useState(myLike)
    const [postLike, snackLike, loadingLike, successLike] = usePostData(`/${type}/comment3/${id}/like?like=${like}`)
    const [showButtonDelete, setShowButtonDelete] = useState(false)
     const [dataDel, loadingDel, successDel] = useDelDate(`/${type}/comment3`)
    const onClickLike = (lk) => {
        setLike(lk)
    }

    useEffect(() => {
        postLike()
    }, [like])

    useEffect(() => {
        if (!loadingLike && successLike)
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

                    {myLike === 0 ?
                        <ThumbDown style={{ color: "white" }} onClick={() => onClickLike(0)} /> :
                        <ThumbDownOutlined style={{ color: "white" }}
                            onClick={() => onClickLike(-1)} />
                    }
                    {myLike === 1 ?
                        <ThumbUp style={{ color: "white" }}
                            onClick={() => onClickLike(0)} /> :
                        <ThumbUpAltOutlined style={{ color: "white" }}
                            onClick={() => onClickLike(1)} />
                    }
                    <h6>{likes}</h6>
                </DivLike>
            </div>

        </DivCardComment>
    )
};

export default CardComment;
