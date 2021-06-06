import React from "react";
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import {Main} from './styled'
import Section from './Section1'
import {Hr} from '../../GlobalStyle'
import Footer from '../../components/Footer/Footer'
import Realible from '../../components/Reliable/Reliable'
const HomePage = () => {

  return <Main>
  <Header/>
  <Banner/>
  <Section/>
  <Realible/>
  <Hr/>
  <Footer/>
  </Main>
};

export default HomePage;
