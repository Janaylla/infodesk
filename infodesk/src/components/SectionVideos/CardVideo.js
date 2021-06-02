import React from "react";
import {DivCard, Title} from './style'
import {AccessTime} from '@material-ui/icons'

import {goToVideo} from '../../Routes/Coordinators'
import {useHistory} from 'react-router-dom'

const Card = () => {
  const history = useHistory();

  return <DivCard>
     <video src="https://storage.googleapis.com/future-apis.appspot.com/1.mp4" controls autoplay></video>
            <Title onClick={() => goToVideo(history, "test")}>
                <h2>Title </h2>
                <h3><AccessTime/>May, 2021</h3>
            </Title>
  </DivCard>
};

export default Card;
