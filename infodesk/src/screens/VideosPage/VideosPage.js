import React, { useState, useEffect } from "react";
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import { Main } from './styled'
import Footer from '../../components/Footer/Footer'
import Topics from '../../components/SectionMoreType/SectionMoreType'
import Videos from '../../components/SectionVideos/SectionVideos'
import { useRequestData } from '../../hooks/useRequestData'
const VideosPage = () => {

  const [topic, setTopic] = useState('')
  const [videos1, getVideos1] = useRequestData('/video/all?orderBy=Last', [], 'videos')
  const [videos2, getVideos2] = useRequestData('/video/all?orderBy=Likes', [], 'videos')
  const [videos3, getVideos3] = useRequestData(`/video/all?topic=${topic}`, [], 'videos')
  
  useEffect(() =>{
    if(topic){
      getVideos3();
    }
  }, [topic])
  
  return <Main>
    <Header />
    <Banner />
    <Topics setTopic={setTopic} topic={topic} />{
      topic ?
        <Videos titleSection={topic} colorSection="blue" videos={videos3} />
        :
        <>
          <Videos titleSection="Lastet Videos" colorSection="blue" videos={videos1} />
          <Videos titleSection="Most Videos" colorSection="orange" videos={videos2} />
        </>
    }
    <Footer />
  </Main>
};

export default VideosPage;
