import React from "react";
import Header from '../../components/Header/Header'
import { Main, DivTitle } from './styled'
import Footer from '../../components/Footer/Footer'
import { Title, Hr } from '../../GlobalStyle'
import FindHome from '../../components/SectionFindHome/FindHome'
const Find = () => {

  return <Main>
    <Header />
    <DivTitle>
      <Title>
        Find a Home
  </Title>
    </DivTitle>
<FindHome/>
   <Hr/> 
    <Footer />
  </Main>
};

export default Find;
