import styled from 'styled-components'
import {colorOrange, colorBlueDark, marginValue2,marginValue05, marginValue, text3, text1} from '../../GlobalStyle'

export const DivSection = styled.section`
    padding: ${marginValue} ${marginValue};
    background-color: ${(props) => props.color==="orange" ? colorOrange : colorBlueDark };
    >h2{
        ${text3}
        color:white;
    margin: ${marginValue};
        
    }
`
export const DivCard = styled.div`
margin: 0 ${marginValue};

h6{
    ${text1}
    color:white;
    margin: 0 0 ${marginValue} 10px;
}
button{
    
    margin: 0 0 0 10px;
}
video{
    width: 350px;
}
>div{
    margin: 0 0 ${marginValue} 0;
}
`

export const Title = styled.div`
h3{
    ${text1}
    color:white;
    font-size: 18px;
    svg{
        height: 12px;
    }
    margin: 0 0 0 -10px;
}
h2{
    ${text1}
    color:white;
    font-weight: 800;
    font-size: 18px;
}
`
export const DivVideos= styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
export const ButtonIcon=styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  -webkit-box-shadow: 0px 7px 14px -7px rgba(0,0,0,0.48); 
  box-shadow: 0px 7px 14px -7px rgba(0,0,0,0.48);
    svg{
        width: 100%;
        transform: rotate(90deg);
    }
`