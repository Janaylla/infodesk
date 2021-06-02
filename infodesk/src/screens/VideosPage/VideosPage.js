import React from "react";
import Header from '../../components/Header/Header'
import Baner from '../../components/Baner/Baner'
import {Main} from './styled'
import Footer from '../../components/Footer/Footer'
import Section from '../../components/SectionMoreType/SectionMoreType'
import Videos from '../../components/SectionVideos/SectionVideos'
const VideosPage = () => {

  return <Main>
  <Header/>
  <Baner/>
  <Section/>
  <Videos videos="last"/>
  <Videos videos="more"/>

  <Footer/>
  </Main>
};

export default VideosPage;
