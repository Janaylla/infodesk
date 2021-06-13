import styled from "styled-components";
import {Dialog} from '@material-ui/core';

export const DialogForm = styled(Dialog)`
    >div >div{
        width: 500px;
        justify-content: flex-start;
        display: flex;
        align-items: center;
        button{
            width: 100%;
        }
    }
`

export const DivAbsolute = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`
export const Main = styled.main`
  width: 100%;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
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