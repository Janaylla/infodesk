import styled from "styled-components";

export const colorOrange = "#ffb751";
export const colorBlueDark = "#1f4e7c"
export const colorOrange2 = "#f3ba61"
export const colorBlue2 = "#edf2f6"
export const colorBlue3 = "#dce3e9"
export const colorGrey = "#707070"
export const marginValue = "2vw";
export const marginValue2 = "4vw";
export const marginValue05 = "1vw";
export const text1 = "font-size: 12px;\ncolor:#404040;\nfont-weight: 400;\n"
export const text2 = "font-size: 20px;\ncolor:#808080;\nfont-weight: 400;\n"
export const text3 = "font-size: 20px;\ncolor:#707070;\nfont-weight: 700;\n"

export const Nav = styled.nav`
    margin: 0 1.6vw;
    display: flex;
    align-items: stretch;
    ${text1}
    ul{
        display: flex;
        li{
            padding: 0 10px;
            cursor: pointer;
            display: flex;
            align-items: center;

            svg{
                font-size: 0.9rem;
                
            }
            ul{
              display: none;
            }
            :hover ul{
              display: initial;
            }
        }
    }
`
export const SubMenu = styled.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: white;
    top: 50px;
    z-index: 1;
    li{
        height: 30px;
        border-bottom: 0.5px solid #aaaaaa;
        margin: 0 !important;
        padding: 0 10px;
    }
`

export const Title = styled.h1`
  color: ${colorGrey};
  font-weight: 400;
  font-size: 30px;
  text-align: center;
`

export const Hr = styled.hr`
    background-color: ${colorOrange};
    height: 3px;
    border:none;
`

export const DivSearch = styled.div`  
    width: 230px;
    margin: 150px 15px 0  0;
    color:white;
    font-size: 15px;
    border-right: 2px ${colorOrange} solid;
    .checkbox{
        display: flex;
        flex-direction: column;
    margin-bottom: 10px;
    }
    label{
      cursor: pointer;
      :hover{
        opacity: 0.7;
      }
    }
    form{        
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    >input, >button{
        width: 150px;
        margin: 4px 0 8px 0;
    }
    h4{
        margin: 8px 0 4px 0;
    }
    }
`
export const Form = styled.form`
 display: flex;
    flex-direction: column;
    max-width: 400px;
    padding: 25px;
    width: 100%;
    button{
      width: 100%;
      margin: 5px 0;
    }
    label h3{
      ${text1}
      font-size: 15px;
    }
    input, select{
      width: 350px;
      height: 35px;
      margin: 10px 0;
      border: 1px solid gray;
      border-radius: 1px;
    -webkit-box-shadow: 0px 7px 14px -7px rgba(0,0,0,0.48); 
    box-shadow: 0px 7px 14px -7px rgba(0,0,0,0.48);
    padding: 0 40px 0 10px;
    font-size: 16px;
    }
    select{
      padding: 0 0px 0 10px;
      width: 400px;
    }
    textarea{
        width: 350px;
      height: 200px;
      border: 1px solid gray;
      border-radius: 1px;
    -webkit-box-shadow: 0px 7px 14px -7px rgba(0,0,0,0.48); 
    box-shadow: 0px 7px 14px -7px rgba(0,0,0,0.48);
    padding: 0 40px 0 10px;
    font-size: 16px;
    padding: 10px 40px 10px 10px;
    font-family: Roboto;
    }
    h1{
      ${text3}
    text-align: center;
      font-size: 30px;
      margin-bottom: 3px;
    }
    h2{
      ${text1}
      text-align: center;
      margin-bottom: 50px;
      font-size: 15px;
    }
    label{
      position: relative;
      width: 100%;
    }
`

export const LikedSaved = styled.div`
            display: flex;
            justify-content: space-between;
                *{
                    color: white;
                    
                }
            .likes{
                display: flex;
                align-items: center;
                p{
                    font-size: 25px;
                    color: white;
                }
            }
                .likes :nth-child(1n+2){
                    margin-left: 5px;
                }
                .likes :nth-child(-n+2){
                 cursor: pointer;
                }
                svg{
                  cursor: pointer;
                }
`
export const ArrowDown = styled.h5`
  color: white;
  display: flex;
  align-items: center;
  padding: 5px 0 15px 0;
  cursor: pointer;
  *{
    color: white;
  }
`