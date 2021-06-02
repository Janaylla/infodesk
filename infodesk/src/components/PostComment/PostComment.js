import React from "react";
import Button from '../Button/Button'
import { DivInputComents} from './styled'
import {ChatBubbleOutline} from '@material-ui/icons';

const Comment = () => {
    return (
        <DivInputComents>
             <ChatBubbleOutline style={{ color: "white" }}/>
            <input placeholder="White a comment"/>
            <Button color="white">Cancel</Button>
            <Button color="white">Coment</Button> 
        </DivInputComents>
    )
};

export default Comment;
