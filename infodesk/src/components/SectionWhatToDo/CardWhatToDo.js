import React,{useState} from "react";
import { DivCard, DivColor } from './styled'
import { ArrowRightAlt } from '@material-ui/icons'
const Card = ({ img, title, text, color }) => {
  

  return <DivCard > 
    <DivColor className="color" color={color}/>
      <img src={img} />
      <h4>{title}</h4>
      <p>{text}</p>
      <button>Read more <ArrowRightAlt /> </button>

  </DivCard>
};

export default Card;
