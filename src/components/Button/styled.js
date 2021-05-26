import styled from "styled-components";
import {colorOrange} from '../../GlobalStyle'
export const Button = styled.button`
  height: 35px;
  width: 150px;
  border:none;
  background-color: ${colorOrange};
  cursor: pointer;
  color:white;
  border-radius: 3px;
  -webkit-box-shadow: 0px 7px 14px -7px rgba(0,0,0,0.48); 
box-shadow: 0px 7px 14px -7px rgba(0,0,0,0.48);
font-weight: 800;
`;