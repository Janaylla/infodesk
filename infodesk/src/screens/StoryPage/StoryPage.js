import React from "react";
import Header from '../../components/Header/Header'
import { Main, DivTitle } from './styled'
import Footer from '../../components/Footer/Footer'
import { Title, Hr } from '../../GlobalStyle'
import StoriesCases from '../../components/SectionStoriesCases/StoriesCases'
const Find = () => {

  return <Main>
    <Header />
    <DivTitle>
      <Title>
      {"Stories & Cases"}
  </Title>
    </DivTitle>
<StoriesCases/>
   <Hr/> 
    <Footer />
  </Main>
};

export default Find;
