import React from "react";
import {DivContainer} from './styled'
import Card from './CardMoreType'
import {Title} from '../../GlobalStyle'
import Webinar from '../../assets/icons/Webinar.png'
import Events from '../../assets/icons/Events-Azul.png'
import Work from '../../assets/icons/Work.png'
import Bureaucracy from '../../assets/icons/Bureaucracy-Azul.png'
import Finance from '../../assets/icons/Finance.png'
import Culture from '../../assets/icons/Culture.png'
const Section = ({topic, setTopic, color}) => {
const sections =  [
    {
        title: "Webinar",
        img: Webinar
    },
    {
        title: "Events",
        img: Events
    },
    {
        title: "Work", 
        img: Work
    },
    {
        title: "Bureaucracy", 
        img: Bureaucracy
    },
    {
        title: "Finance", 
        img: Finance
    },
    {
        title: "Culture & Life in NL", 
        img: Culture
    }
]

  return <DivContainer>
       <Title>Unsure what to do before moving to the Netherlands</Title>
       <div>
      {
          sections.map((cardInfor) =>{
              return  <Card img={cardInfor.img} title={cardInfor.title}
              onClick={() => setTopic(cardInfor.title === topic? '': cardInfor.title)}
              selected={cardInfor.title === topic} color={color}/>
          })
      }
     
     </div>
  </DivContainer>
};

export default Section;
