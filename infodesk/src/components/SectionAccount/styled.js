import styled from 'styled-components'
import { Nav } from '../../GlobalStyle'
import { colorBlueDark, colorOrange, marginValue, text2, text3, marginValue2, text1, DivSearch } from '../../GlobalStyle'

export const DivSection = styled.section`
    background-color: ${colorBlueDark};
    display: flex;
    padding: ${marginValue} ${marginValue2};
    justify-content: space-between;
    align-items: flex-start;
    h2{
        ${text2}
        color:white;
        font-size: 25px;
        font-weight: 300;
    }
`
export const DivAccount = styled.div`  
    width: calc(100% - 150px);
    >h2{
          height: 100px;
            margin: 0 0 0 15px;
    }
    >button{
        margin: 10px 0 50px 0 ;
    }
`

export const DivMenu = styled(DivSearch)`
    min-height: 600px;
    margin: 100px 15px 0  0;
    svg{
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }
    h4{
        display: flex;
        align-items: center;
        margin: 5px 0;
        cursor: pointer;
    }
`
export const SectionAccount = styled.section`
    >div{
        width: 100%;
     
    }
    h2{
        height: auto;
    }
    .hello{
        background-color: ${colorOrange};
        padding: 10px;
        h2{
            margin-bottom: 30px;
        }
        margin-bottom: 30px;
    }
    .you{
        >div{
        background-color: white;
            padding: 20px 15px;
        p{
            ${text1}
            font-size: 15px;
            padding: 4px 0;
        }
        button{
            margin: 4px 0;
        }
        }
        h2{
            margin: 0 0 5px 15px;
        }
    }
`