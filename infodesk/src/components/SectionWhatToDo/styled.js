import styled, { keyframes } from 'styled-components'
import { text1, marginValue2, marginValue, colorBlueDark, colorOrange } from '../../GlobalStyle'
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
`

const animateCard = keyframes`
  to {
      height: 60px;
  }
`;
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
  position: relative;
  z-index: 0;
  .color{
    display: none;
  }
  
  :hover{
    transform: scale(1.15);
    transition:0.4s;
    .color{
      display: initial;
    }
    button{
      color: ${colorOrange};
      font-weight: 900;
    transition:0.2s;
      svg{
      color: initial;
    }
    }
  }
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
    padding: 20px 0;
  }
`
export const DivColor = styled.div`
  background-color: ${({color}) => color === 'orange' ?colorOrange:colorBlueDark};
    position: absolute;
    width: 100%;
    bottom: 0%;
    height:100%;
    z-index: -1;
    animation: ${animateCard} 0.7s linear;
    animation-fill-mode: forwards;
`