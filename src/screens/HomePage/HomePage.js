import React from "react";
import Header from '../../components/Header/Header'
import Baner from '../../components/Baner/Baner'
import {Main, Hr} from './styled'
import SectionInf from './Section'
import Footer from '../../components/Footer/Footer'
import Realible from '../../components/Reliable/Reliable'
const HomePage = () => {

  return <Main>
  <Header/>
  <Baner/>
  <SectionInf/>
  <Realible/>
  <Hr/>
  <Footer/>
  </Main>
};

export default HomePage;
