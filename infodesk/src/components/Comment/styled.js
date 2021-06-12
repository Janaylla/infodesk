import styled from 'styled-components'
import { Nav } from '../../GlobalStyle'
import { colorBlueDark, colorGrey, marginValue, text2, text3, marginValue2, text1, ArrowDown } from '../../GlobalStyle'

export const DivCardComment = styled.div`
    display: flex;
    padding: 5px;
    width: 100%;
    .avatar{
        width: 50px;
        height: 50px;
        background-color: white;
        border-radius: 50%;
    }
    .text{
        max-width: 800px;
        padding: 10px;
        flex-grow: 1;
        p{
            ${text1}
            color:white;
           
        }
    }
    h3{
            ${text3}
            color:white;
            margin: 3px 0 10px 0;
            font-size: 15px;
        }
`
export const DivLike = styled.div`
    display: flex;
    align-items: center;
    width:100%;
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
export const Reply = styled.p`
 cursor: pointer;
                opacity: 0.6;
            :hover{
                opacity: 1;
            }
`
export const ShowCommentsSmall= styled(ArrowDown)`
    font-size: 15px;
    padding: 0px 0 3px 0;
    svg{
        width: 25px;
    }

`
export const Title = styled.div`
    display: flex;
    justify-content: space-between;
       
    position: relative;
        *{
            color:white;
        }
        .delete {
            button{
            border: black 1px  ${colorGrey};
            color: ${colorGrey};
            background-color: white;
            font-size: 15px;
            display: flex;
            align-items: center;
            padding: 5px 10px;
            cursor: pointer;
            position: absolute;
            right: 0px;
            top: 28px;
        }
        svg{
            cursor: pointer;
            :hover{
                opacity: 0.6;
            }
        }
        }
`