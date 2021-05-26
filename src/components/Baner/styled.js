import styled from "styled-components";
import {colorBlueDark} from '../../GlobalStyle'
export const Main = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  img{
      width: 100%;
  }
  h1{
    font-size: 2rem;
    position: absolute;
    color: white;
    max-width: 600px;
    text-align: center;
  }
`;