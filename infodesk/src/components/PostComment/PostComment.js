import React from "react";
import Button from '../Button/Button'
import { DivInputComments} from './styled'
import {ChatBubbleOutline} from '@material-ui/icons';

const Comment = ({onClickComment, onChange, value, onClickCancel}) => {
   
    return (
        <DivInputComments>
             <ChatBubbleOutline style={{ color: "white" }}/>
            <input placeholder="White a comment" onChange={onChange} value={value}/>
            <Button color="white" onClick={onClickCancel}>Cancel</Button>
            <Button color="orange" onClick={onClickComment}>Comment</Button> 
        </DivInputComments>
    )
};

export default Comment;
