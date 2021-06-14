import React from "react";
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import {Main} from './styled'
import Footer from '../../components/Footer/Footer'
import Realible from '../../components/Reliable/Reliable'
import Section from '../../components/SectionWhatToDo/SectionWhatToDo'
import Digid from '../../components/Digid/Digid'
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
const VideoPage = () => {
  const s1 = [
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
];
const s2 = [
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
  return <>
  <Main>
  <Header/>
  <Banner/>
  <Section information={s1} color="orange"/>
  <Realible/>
  <Section information={s2} color="blue"/>
  <Digid/>
  <Footer/>
  </Main>
  </>
};

export default VideoPage;
