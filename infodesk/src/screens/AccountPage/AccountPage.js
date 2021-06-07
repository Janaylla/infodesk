import React from "react";
import Header from '../../components/Header/Header'
import { Main, DivTitle } from './styled'
import Footer from '../../components/Footer/Footer'
import { Title, Hr } from '../../GlobalStyle'
import Account from '../../components/SectionAccount/AccountContainer'
import useProtectedPage from '../../hooks/useProtectedPage'

const Find = () => {
  useProtectedPage()
  return <Main>
    <Header />
    <DivTitle>
      <Title>
      Account overview
  </Title>
    </DivTitle>
<Account/>
   <Hr/> 
    <Footer />
  </Main>
};

export default Find;
