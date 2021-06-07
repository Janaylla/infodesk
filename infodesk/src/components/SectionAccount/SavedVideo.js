import React, { useState } from "react";
import Button from '../Button/Button'
import {SectionAccount} from './styled'
import {useRequestData} from '../../hooks/useRequestData'
import SectionVideos from '../../components/SectionVideos/SectionVideos'
const FindHome = () => {
  const [videos, getVideos] = useRequestData('/video/favorite', [], 'videos')
  console.log(videos)
    return (
        
        <SectionAccount>
            <SectionVideos DoNotShowIcon videos={videos}/>
        </SectionAccount>
    )
};

export default FindHome;
