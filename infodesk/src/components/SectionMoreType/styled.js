import styled from 'styled-components'
import { text1, marginValue2, marginValue, colorGrey, colorOrange } from '../../GlobalStyle'
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
  cursor:pointer;
  :hover{
    >div{
      transform: scale(1.05);
      transition:0.4s;
    }
  }
  h4{
    ${text1}
    font-size: 15px;
    font-weight: 500;
    color: ${colorGrey};
  }
  >div{
      width: 150px;
      height: 150px;
      border-radius: 50%;
      
      ${({selected}) => selected && `background-color: ${colorOrange};\n;border: 4px solid ${colorOrange};`}

      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 5px;
    img{
      width: 155px;
      height: 155px;
      
    }
  }
`