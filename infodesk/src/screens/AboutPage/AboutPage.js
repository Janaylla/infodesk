import React from "react";
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import {Main} from './styled'
import Footer from '../../components/Footer/Footer'
import Realible from '../../components/Reliable/Reliable'
import Section from '../../components/SectionWhatToDo/SectionWhatToDo'
import Digid from '../../components/Digid/Digid'
const VideoPage = () => {

  return <>
  <Main>
  <Header/>
  <Banner/>
  <Section s1/>
  <Realible/>
  <Section/>
  <Digid/>
  <Footer/>
  </Main>
  </>
};

export default VideoPage;
