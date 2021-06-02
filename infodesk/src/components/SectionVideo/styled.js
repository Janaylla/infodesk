import styled from 'styled-components'
import {Nav} from '../../GlobalStyle'
import {colorBlueDark, marginValue, text2, text3, marginValue2, text1} from '../../GlobalStyle'
export const DivSection = styled.section`
    background-color: ${colorBlueDark};
    h6{
        ${text1}
        color:white;
        margin: 0 0 ${marginValue} 10px;
    }
    button{
        
        margin: 0 0 0 10px;
    }
    padding: ${marginValue2};
    video{
        width: 900px;
    }
    >div{
        margin: 20px 0;
    }
`

export const Title = styled.div`
    h3{
        ${text1}
        color:white;
        font-size: 12px;
        margin: 10px 0 0 -13px;
        svg{
            height: 12px;
        }
    }
    h2{
        ${text1}
        color:white;
        font-weight: 800;
        font-size: 18px;
    }
`