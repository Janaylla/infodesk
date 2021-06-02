import React from "react";
import {DivContainer} from './styled'
import Card from './CardWhatToDo'
import {Title} from '../../GlobalStyle'
import Documents from '../../assets/icons/Documents-ICON.png'
import Culture from '../../assets/icons/Culture-Icon.png'
import Roommate from '../../assets/icons/Roommate-Icon.png'
import Stories from '../../assets/icons/Stories-e-Cases.png'
import Student from '../../assets/icons/Student-Loan.png'
import Banks from '../../assets/icons/Banks-Icon.png'
import Law from '../../assets/icons/Law-Icon.png'
import Work from '../../assets/icons/Work-Icon.png'
import Bureaucracy from '../../assets/icons/Bureaucracy.png'
import Events from '../../assets/icons/Events.png'
import Dailybais from '../../assets/icons/Dailybasis-Icon.png'
import Transportation from '../../assets/icons/Transportation-Icon.png'
const Section = ({s1}) => {
const sections = s1? [
    {
        title: "Documentation",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet justo elit. Praesent sit amet ante vitae nibh hendrerit lobortis ac ac risus. Phasellus laoreet cursus rutrum. Morbi pharetra est at viverra laoreet.",
        img: Documents
    },
    {
        title: "Culture",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet justo elit. Praesent sit amet ante vitae nibh hendrerit lobortis ac ac risus. Phasellus laoreet cursus rutrum. Morbi pharetra est at viverra laoreet.",
        img: Culture
    },
    {
        title: "Find a roommate",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet justo elit. Praesent sit amet ante vitae nibh hendrerit lobortis ac ac risus. Phasellus laoreet cursus rutrum. Morbi pharetra est at viverra laoreet.",
        img: Roommate
    },
    {
        title: "Stories & cases",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet justo elit. Praesent sit amet ante vitae nibh hendrerit lobortis ac ac risus. Phasellus laoreet cursus rutrum. Morbi pharetra est at viverra laoreet.",
        img: Stories
    }
]:[
    {
        title: "Student Loan",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet justo elit. Praesent sit amet ante vitae nibh hendrerit lobortis ac ac risus. Phasellus laoreet cursus rutrum. Morbi pharetra est at viverra laoreet.",
        img: Student
    },
    {
        title: "Banks",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet justo elit. Praesent sit amet ante vitae nibh hendrerit lobortis ac ac risus. Phasellus laoreet cursus rutrum. Morbi pharetra est at viverra laoreet.",
        img: Banks
    },
    {
        title: "Law",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet justo elit. Praesent sit amet ante vitae nibh hendrerit lobortis ac ac risus. Phasellus laoreet cursus rutrum. Morbi pharetra est at viverra laoreet.",
        img: Law
    },
    {
        title: "Work",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet justo elit. Praesent sit amet ante vitae nibh hendrerit lobortis ac ac risus. Phasellus laoreet cursus rutrum. Morbi pharetra est at viverra laoreet.",
        img: Work
    },
    
    {
        title: "Bureaucrary",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet justo elit. Praesent sit amet ante vitae nibh hendrerit lobortis ac ac risus. Phasellus laoreet cursus rutrum. Morbi pharetra est at viverra laoreet.",
        img: Bureaucracy 
        
    },
    {
        title: "Events",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet justo elit. Praesent sit amet ante vitae nibh hendrerit lobortis ac ac risus. Phasellus laoreet cursus rutrum. Morbi pharetra est at viverra laoreet.",
        img: Events
    },
    {
        title: "Dailybais in the NL",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet justo elit. Praesent sit amet ante vitae nibh hendrerit lobortis ac ac risus. Phasellus laoreet cursus rutrum. Morbi pharetra est at viverra laoreet.",
        img: Dailybais
    },
    {
        title: "Tranportation",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet justo elit. Praesent sit amet ante vitae nibh hendrerit lobortis ac ac risus. Phasellus laoreet cursus rutrum. Morbi pharetra est at viverra laoreet.",
        img: Transportation
    }
]
  return <DivContainer>
       <Title>Unsure what to do before moving to the Netherlands</Title>
       <div>
      {
          sections.map((cardInfor) =>{
              return  <Card img={cardInfor.img} text={cardInfor.text} title={cardInfor.title}/>
          })
      }
     
     </div>
  </DivContainer>
};

export default Section;
