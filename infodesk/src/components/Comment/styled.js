import styled from 'styled-components'
import {Nav} from '../../GlobalStyle'
import {colorBlueDark, marginValue, text2, text3, marginValue2, text1} from '../../GlobalStyle'

export const DivCardComment = styled.div`
    display: flex;
    padding: 5px;
    .avatar{
        width: 50px;
        height: 50px;
        background-color: white;
        border-radius: 50%;
    }
    .text{
        max-width: 500px;
        padding: 10px;
        h3{
            ${text3}
            color:white;
            margin: 3px 0 10px 0;
            font-size: 15px;
        }
        p{
            ${text1}
            color:white;
        }
    }
`
export const DivLike = styled.div`
    display: flex;
    align-items: center;
    svg{
        width: 20px;
        margin: 5px 5px 5px 0px;
        cursor: pointer;
        
        :hover *{
            color: #ffffffaa;
        }
    }
    h6{
        margin: 0 5px;
        font-size: 20px;
        color: #ffffff;
    }
`