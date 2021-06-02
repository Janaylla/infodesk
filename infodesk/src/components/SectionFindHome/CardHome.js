import React from "react";
import Button from '../Button/Button'
import { DivCardHome,DivHomeComents,DivInputComents} from './styled'
import Comment from '../PostComment/PostComment'
import {ChatBubbleOutline} from '@material-ui/icons';
import CardComment from '../../components/Comment/CardComment'
const FindHome = ({text, price, name, contact, coments}) => {
    return (
        <>
        <DivCardHome>
            <div className="text">
                <div>
                    <h3>Room</h3>
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
       <Comment/>
        <DivHomeComents>
            <CardComment name="Felipe" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia sem vel lectus dictum, in fermentum orci congue. Integer volutpat venenatis nulla ut convallis;."/>
            <CardComment name="Felipe" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia sem vel lectus dictum, in fermentum orci congue. Integer volutpat venenatis nulla ut convallis;."/>
        </DivHomeComents>
        </>
    )
};

export default FindHome;
