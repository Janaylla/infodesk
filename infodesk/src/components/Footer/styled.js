import styled from 'styled-components'
import {Nav} from '../../GlobalStyle'
import {colorBlue2, colorBlue3, marginValue, text1} from '../../GlobalStyle'
export const DivFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:  0 ${marginValue};
    > div{
        display: flex;
        align-items: center;
    }
    background-color: ${colorBlue2};
`
export const DivInfo = styled.div`
img{
    height: 200px;
    margin: 0 ${marginValue};
}

`
export const SocialNetworks = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 0px ${marginValue};
justify-content: flex-start;

img{
    width: 30px;
    height: 30px;
    margin: 5px;
    cursor: pointer;
}
>div{
align-items: flex-start;
display: flex;
justify-content: flex-start;
}
h6{
text-align: start;
${text1}

}
`
export const NavFooter = styled(Nav)`
    ul{
        flex-direction: column;
        li{
            height: 20px;
        }
    }

`
export const Links = styled(NavFooter)`

`
export const DivCredits = styled.div`
    background-color: ${colorBlue3};
       display: flex;
       justify-content: space-between;
         padding: 0 ${marginValue};
   ul{
       display: flex;
   }
    li{
        ${text1}
        margin: 20px ${marginValue};
        
    }
    
`