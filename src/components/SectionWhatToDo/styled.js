import styled from 'styled-components'
import { text1, marginValue2, marginValue, colorGrey } from '../../GlobalStyle'
export const DivContainer = styled.section`
display: flex;
flex-direction: column;
  align-items: center;
  padding: ${marginValue2};
>div{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${marginValue};
  flex-wrap: wrap;
}
h1{
  color: ${colorGrey};
  font-weight: 400;
}
`
export const DivCard = styled.div`
  width: 250px;
  -webkit-box-shadow: 0px 7px 14px -7px rgba(0,0,0,0.48); 
box-shadow: 0px 7px 14px -7px rgba(0,0,0,0.48);
display: flex;
flex-direction: column;
align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 20px 20px 0 20px;

  p{
    ${text1}
    flex-grow: 1;

  }
  h4{
    ${text1}
    font-size: 15px;
    margin: 7px;
    font-weight: 500;
  }
  img{
    width: 100px;
    height: 100px;
    margin: 20px;
  }
  button{
    cursor:pointer;
    border:none;
    background-color: Transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    ${text1}
    padding: 30px 0;
    svg{
      font-size: 0.6rem;
    }
  }
`