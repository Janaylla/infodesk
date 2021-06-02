import React from "react";
import {DivCard, Title} from './style'
import {AccessTime} from '@material-ui/icons'
const Card = () => {

  return <DivCard>
     <video src="https://storage.googleapis.com/future-apis.appspot.com/1.mp4" controls autoplay></video>
            <Title>
                <h2>Title </h2>
                <h3><AccessTime/>Maio, 2021</h3>
            </Title>
  </DivCard>
};

export default Card;
