import React from "react";
import {DivSection, DivVideos, ButtonIcon} from './style'
import Card from './CardVideo'
import {ArrowForwardIos} from '@material-ui/icons'
import {colorGrey} from '../../GlobalStyle'

const CardsVideos = () =>{
    let cards = [];
    for(let i =0; i<6; i++){
        cards.push(<Card/>)
    }
    return cards
}
const Section = ({videos}) => {

  return <DivSection color={videos === "more"? "orange":"blue"}>
      
      <h2> {videos === "more"? "Most Viewed":"Latest Videos"}</h2>
      <DivVideos>
      {
         CardsVideos()
      }
      </DivVideos>
      <ButtonIcon>
    <ArrowForwardIos style={{ color: colorGrey }}/>
      </ButtonIcon>
  </DivSection>
};

export default Section;
