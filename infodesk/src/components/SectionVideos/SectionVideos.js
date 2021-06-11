import React,{useState} from "react";
import { DivSection, DivVideos, ButtonIcon } from './style'
import Card from './CardVideo'
import { ArrowForwardIos} from '@material-ui/icons'
import { colorGrey } from '../../GlobalStyle'

const Section = ({ colorSection, titleSection, videos, DoNotShowIcon}) => {
  const [showAll, setShowAll] = useState(false)
  return <DivSection color={colorSection}>

    <h2> {titleSection}</h2>

    <DivVideos>{
        videos && videos.map((video) => {
        return <Card
          id={video.Id}
          title={video.Title}
          date={video.Date}
          url={video.Url} />
      }).slice(0,(showAll?videos.length:6))
    }
    </DivVideos>
    {videos && videos.length > 6 && <ButtonIcon onClick={() => setShowAll(!showAll)} 
    showAll={showAll} >
        <ArrowForwardIos style={{ color: colorGrey }} />

    </ButtonIcon>}
  </DivSection>
};

export default Section;
