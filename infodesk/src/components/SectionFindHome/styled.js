import styled from 'styled-components'
import {Nav} from '../../GlobalStyle'
import {colorBlueDark, marginValue, text2, text3, marginValue2, text1} from '../../GlobalStyle'
export const DivSection = styled.section`
    background-color: ${colorBlueDark};
    display: flex;
    padding: ${marginValue2};
    justify-content: space-between;
    align-items: flex-start;
`
export const Comments = styled.div`

`
export const DivCardHome = styled.div`
background-color: #ffffff;
margin: ${marginValue} 0;
padding: 1vw;
display: flex;
h3{
    ${text3}
}
p{  
    ${text2}
}
.text{
    flex-grow: 1;
    >div{
        display: flex;
        h3:last-of-type{
            margin-left: 20px;
        }
        margin-bottom: ${marginValue};
    }
    margin-bottom: ${marginValue};
}
.contact{
    width: 400px;
    >div:first-of-type{
        margin-bottom: ${marginValue};
    }
    >div{
        margin: 0 ${marginValue};
        
    }
}
`

export const DivHomeComments = styled.div`

`
export const DivInputComments = styled.div`
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