import styled from "styled-components";
import {colorBlueDark, colorOrange2, colorOrange, text1, text3} from '../../GlobalStyle';

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
`
export const DivAbsolute = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`
export const IconPassword = styled.div`
  position: absolute;
  bottom: 7px;
  right: 10px;
  cursor: pointer;
  opacity: 0.6;
  :hover{
  opacity: 0.8;
  }
  svg{
    width: 25px;
  }
`