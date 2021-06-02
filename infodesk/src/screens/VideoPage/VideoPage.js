import React from "react";
import Header from '../../components/Header/Header'
import { Main, DivTitle } from './styled'
import Footer from '../../components/Footer/Footer'
import { Title, Hr } from '../../GlobalStyle'
import SectionVideo from '../../components/SectionVideo/SectionVideo'
const Find = () => {

  return <Main>
    <Header/>
    <SectionVideo/>
   <Hr/> 
    <Footer />
  </Main>
};

export default Find;
