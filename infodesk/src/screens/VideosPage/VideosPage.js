import React from "react";
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import {Main} from './styled'
import Footer from '../../components/Footer/Footer'
import Section from '../../components/SectionMoreType/SectionMoreType'
import Videos from '../../components/SectionVideos/SectionVideos'
import {useRequestData} from '../../hooks/useRequestData'
const VideosPage = () => {

  const [videos, getVideos] = useRequestData('/video/all', [], 'videos')
  console.log(videos)
  return <Main>
  <Header/>
  <Banner/>
  <Section/>
  <Videos  titleSection="Lastest Videos" colorSection="blue"videos={videos}/>
  <Videos titleSection="Most Videos" colorSection="orange" videos={videos}/>

  <Footer/>
  </Main>
};

export default VideosPage;
