import styled from "styled-components";

import {colorBlueDark, colorOrange2, colorOrange} from '../../GlobalStyle';

export const Section = styled.section`
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

button{
    bottom:-7px;
    position: absolute;
  }
`