import styled from "styled-components";

export const colorOrange = "#ffb751";
export const colorBlueDark = "#1f4e7c"
export const colorOrange2 = "#f3ba61"
export const colorBlue2 = "#edf2f6"
export const colorBlue3 = "#dce3e9"
export const colorGrey = "#707070"
export const marginValue = "2vw";
export const marginValue2 = "4vw";
export const text1 = "font-size: 12px;\ncolor:#404040;\nfont-weight: 400;\n"

export const Nav = styled.nav`
    margin: 0 1.6vw;
    display: flex;
    align-items: center;
    ${text1}
    ul{
        display: flex;
        li{
            margin: 0 10px;
            cursor: pointer;
            display: flex;
            align-items: center;
            svg{
                font-size: 0.9rem;
                
            }
        }
    }
`