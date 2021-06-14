import styled from "styled-components";
import { colorOrange, colorBlueDark, colorGrey } from '../../GlobalStyle'
export const Button = styled.button`
  height: 35px;
  width: 150px;
  border:none;
  background-color: ${(props) => {
    let color = colorOrange;
    if(props.color === "blue")
    color =  colorBlueDark;
    else if(props.color === "white")
    color = "white";
    return color
  }};
  cursor: pointer;
  color:${(props) => props.color !== "white" ? "white" : colorGrey};
  border-radius: 3px;
  -webkit-box-shadow: 0px 7px 14px -7px rgba(0,0,0,0.48); 
  box-shadow: 0px 7px 14px -7px rgba(0,0,0,0.48);
  font-weight: 800;
  :hover{
    color: ${(props) => {
    let color = colorOrange;
    if(props.color === "blue")
    color =  colorBlueDark;
    else if(props.color === "white")
    color = "white";
    return color
  }};
  border:1px solid ${(props) => {
    let color = colorOrange;
    if(props.color === "blue")
    color =  colorBlueDark;
    else if(props.color === "white")
    color = "white";
    return color 
  }};
  background-color: white;
  transition: 500ms;
  }
  svg{
    color: "white";
  }
`;