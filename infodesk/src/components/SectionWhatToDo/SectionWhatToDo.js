import React from "react";
import {DivContainer} from './styled'
import Card from './CardWhatToDo'
import {Title} from '../../GlobalStyle'
const Section = ({information, color}) => {

  return <DivContainer>
       <Title>Unsure what to do before moving to the Netherlands</Title>
       <div>
      {
          information.map((cardInfor) =>{
              return  <Card img={cardInfor.img} color={color} text={cardInfor.text} title={cardInfor.title}/>
          })
      }
     
     </div>
  </DivContainer>
};

export default Section;
