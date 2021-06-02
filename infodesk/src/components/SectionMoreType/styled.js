import styled from 'styled-components'
import { text1, marginValue2, marginValue, colorGrey } from '../../GlobalStyle'
export const DivContainer = styled.section`
display: flex;
flex-direction: column;
  align-items: center;
  padding: ${marginValue} ${marginValue2};
>div{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${marginValue};
  flex-wrap: wrap;
}
`
export const DivCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  justify-content: flex-start;
  text-align: center;

  h4{
    ${text1}
    font-size: 15px;
    font-weight: 500;
    color: ${colorGrey};
  }
  img{
    width: 150px;
    height: 150px;
  }
`