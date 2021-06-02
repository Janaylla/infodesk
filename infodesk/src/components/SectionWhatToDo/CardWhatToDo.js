import React from "react";
import {DivCard} from './styled'
import {ArrowForward} from '@material-ui/icons'
const Card = ({img, title, text}) => {
  return <DivCard>
      <img src={img}/>
      <h4>{title}</h4>
      <p>{text}</p>
      <button>Read more <ArrowForward/> </button>
  </DivCard>
};

export default Card;
