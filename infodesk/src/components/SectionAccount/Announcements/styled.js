import styled from 'styled-components'
import { colorBlueDark, marginValue, text2, text3, marginValue2 } from '../../../GlobalStyle'
export const DivSection = styled.section`
    background-color: ${colorBlueDark};
    display: flex;
    flex-direction: column;
    padding: ${marginValue2};
    justify-content: space-between;
    align-items: flex-start;
`
export const Comments = styled.div`

`
export const DivCardHome = styled.div`
width: 100%;
display: flex;
h3{
    ${text3}
}
p{  
    ${text2}
}
.mainAvatar{
    .avatar{
        background-color: white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    margin-right: 10px;
}
.contentPost{
    display: flex;
    flex-direction: column;
    margin-bottom: ${marginValue};
    width: 100%;
    .userName{
        p{
            ${text3}
        color:white;
        font-size: 15px;
        }
        margin: 3px 0 0px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1vw 0;
    }
    .contentText{
    background-color: #ffffff;
    padding: 1vw;
    margin: 5px 0;
    display: flex;
    flex-grow: 1;
    width: 100%;
        .text{
            flex-grow: 1;
            >div{
                display: flex;
                h3:nth-of-type(n+2){
                    margin-left: 20px;
                }
                margin-bottom: ${marginValue};
            }
            margin-bottom: ${marginValue};
        }
        .contact{
            width: 350px;
            >div:first-of-type{
                margin-bottom: ${marginValue};
            }
            >div{
                margin: 0 ${marginValue};
                
            }
            }
        }
}
`

export const DivHomeComments = styled.div`
    width: 100%;

`
export const DivInputComments = styled.div`
width: 100%;
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
export const DivFind = styled.div`  
    width: calc(100% - 150px);
    h2{
        ${text2}
        color:white;
        font-size: 25px;
        margin: 10px 0 0 0;
        font-weight: 300;
    }
    >button{
        margin: 10px 0 50px 0 ;
    }
`