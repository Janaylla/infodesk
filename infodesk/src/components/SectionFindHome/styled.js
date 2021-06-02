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
`
export const Comments = styled.div`

`
export const DivCardHome = styled.div`
background-color: #ffffff;
margin: ${marginValue} 0;
padding: 1vw;
display: flex;
width: 100%;
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

export const DivHomeComents = styled.div`

`
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