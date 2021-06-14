import React from "react";
import {DivCard} from './styled'
const Card = ({img, title, selected, onClick}) => {
  return <DivCard onClick={onClick} selected={selected}>
      <div>     
         <img src={img}/>
      </div>

      <h4>{title}</h4>
  </DivCard>
};

export default Card;
