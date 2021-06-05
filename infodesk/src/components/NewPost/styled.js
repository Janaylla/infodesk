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