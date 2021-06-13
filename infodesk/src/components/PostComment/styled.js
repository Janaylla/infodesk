import styled from 'styled-components'
import {Nav} from '../../GlobalStyle'
import {colorBlueDark, marginValue, text2, text3, marginValue2, text1} from '../../GlobalStyle'

export const DivInputComments = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
input{
    ${text3}
    font-size: 15px;
    width: calc(100% - 250px);
    height: 35px;
    margin: 0 0 0  5px;
    padding: 0 10px;
    
}
svg{
    width: 28px;
}
>button{
    width: auto;
    padding: 0 20px;
    height: 35px;
}
`