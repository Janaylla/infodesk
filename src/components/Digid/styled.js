import styled from 'styled-components'
import {Nav} from '../../GlobalStyle'
import {colorBlueDark, marginValue, colorOrange, marginValue2, text1} from '../../GlobalStyle'
export const DivDigid = styled.footer`
display: flex;
padding: ${marginValue2};
background-color: ${colorOrange};
    align-items: center;
    justify-content: center;
p{
    ${text1}
    color:white;
    margin: 5px;
}
h1{
    color: ${colorBlueDark};
}

button{
    margin: 10px 0px;
}
>div:last-of-type{
    width: 600px;
    display: flex;
    align-items: center;
    margin-left: ${marginValue2};
video{
    width: 100%;
}
}
`