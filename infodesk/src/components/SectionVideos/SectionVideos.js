import React from "react";
import { DivSection, DivVideos, ButtonIcon } from './style'
import Card from './CardVideo'
import { ArrowForwardIos } from '@material-ui/icons'
import { colorGrey } from '../../GlobalStyle'

const Section = ({ colorSection, titleSection, videos, DoNotShowIcon}) => {

  return <DivSection color={colorSection}>

    <h2> {titleSection}</h2>

    <DivVideos>{
        videos && videos.map((video) => {
        return <Card
          id={video.Id}
          title={video.Title}
          date={video.Date}
          url={video.Url} />
      })
    }
    </DivVideos>
    {!DoNotShowIcon && <ButtonIcon>
      <ArrowForwardIos style={{ color: colorGrey }} />
    </ButtonIcon>}
  </DivSection>
};

export default Section;
