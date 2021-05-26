import styled from "styled-components";
import {marginValue} from '../../GlobalStyle'
export const Main = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px ${marginValue};
`;
export const Left = styled.nav`
  display: flex;
  .logo{
    height: 50px;
    width: auto;
        margin: 0 ${marginValue};;
    }
   
`;
export const Right = styled.div`
display: flex;
align-items: center;
    .search{
        margin: 0 ${marginValue};
        display: flex;
        align-items: center;
        input{
            font-size: 1rem;
            padding: 2px;
        }
    }
    button{
        
        margin: 0 ${marginValue};
    }
`;
