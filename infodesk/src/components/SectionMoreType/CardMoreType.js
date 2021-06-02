import React from "react";
import {DivCard} from './styled'
import {ArrowForward} from '@material-ui/icons'
const Card = ({img, title}) => {
  return <DivCard>
      <img src={img}/>
      <h4>{title}</h4>
  </DivCard>
};

export default Card;
