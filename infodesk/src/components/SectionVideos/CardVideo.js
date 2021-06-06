import React from "react";
import {DivCard, DivVideo, Title} from './style'
import {AccessTime} from '@material-ui/icons'

import {goToVideo} from '../../Routes/Coordinators'
import {useHistory} from 'react-router-dom'

const Card = ({id, title, date, url}) => {
  const history = useHistory();

  return <DivCard>
    <DivVideo>
     <video src={`/videos/${url}`} controls autoplay></video>
     </DivVideo>
            <Title onClick={() => goToVideo(history, id)}>
                <h2>{title} </h2>
                <h3><AccessTime/>{date}</h3>
            </Title>
  </DivCard>
};

export default Card;
