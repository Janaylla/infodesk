import React from "react";
import { Main} from "./styled";
import BanerImg from '../../assets/img/photo2.jpg'
export default function Baner() {
  return (
    <Main>
       <img src={BanerImg}/>
       <h1>What are you planning for your future?</h1>
    </Main>
  );
}
