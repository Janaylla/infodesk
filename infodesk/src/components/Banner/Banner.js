import React from "react";
import { Main} from "./styled";
import BannerImg from '../../assets/img/photo2.jpg'
export default function Banner() {
  return (
    <Main>
       <img src={BannerImg}/>
       <h1>What are you planning for your future?</h1>
    </Main>
  );
}
