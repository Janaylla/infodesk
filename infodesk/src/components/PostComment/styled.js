import styled from 'styled-components'
import {Nav} from '../../GlobalStyle'
import {colorBlueDark, marginValue, text2, text3, marginValue2, text1} from '../../GlobalStyle'

export const DivInputComents = styled.div`
display: flex;
align-items: center;
input{
    ${text3}
    font-size: 15px;
    width: 500px;
    height: 35px;
    margin: 0 0 0  5px;
    padding: 0 10px;
}
svg{
    width: 28px;
}
`