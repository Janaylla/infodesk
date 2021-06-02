import styled from "styled-components";

import {colorBlueDark, colorOrange2, colorOrange} from '../../GlobalStyle';
export const Main = styled.main``

export const Section1 = styled.section`
  position: relative; display: flex;
  align-items: center;
  justify-content: center;
img{
    width: 100%;
}

.divButtons{
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
}
.b1{
    top:33%;
    left:60%;
    position: absolute;
}
.b2{
    top:68%;
    left:55%;
    position: absolute;
}
.b3{
    bottom:10%;
    left:60%;
    position: absolute;
}
`
export const Section2 = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
img{
    width: 100%;
}
.divInformations{
    position: absolute;
    max-width: 800px;
    width: 100%;
    height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  .orange{
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    top: -20px;
    left: 20px;
  }
  .white{
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${colorOrange2};
    top: 20px;
    left: -20px;
  }
  .blue{
    width: 100%;
    height: 100%;
    position: absolute;
    background-color:  ${colorBlueDark};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color:white;
  }
}
`