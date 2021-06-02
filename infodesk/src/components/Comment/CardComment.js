import React from "react";
import { DivCardComment, DivLike} from './styled'
import {ThumbDownOutlined, ThumbUpAltOutlined} from '@material-ui/icons'
const CardComment = ({text, name, like}) => {
    return (
        <DivCardComment>
            <div className="avatar">

            </div>
            <div className="text">
                <h3>{name}</h3>
                <p>{text}</p>
                {
    like && <DivLike>
        <ThumbDownOutlined style={{ color: "white" }}/>
        <ThumbUpAltOutlined style={{ color: "white" }}/>
        <p>Reply</p>
    </DivLike>
}
            </div>

        </DivCardComment>
    )
};

export default CardComment;
