import styled from "styled-components";

import Snackbar from "@material-ui/core/Snackbar";

export const DivConteiner = styled.div``;
export const SnackbarSucess = styled(Snackbar)`
  background-color: green !important;
  * {
    background-color: green !important;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
  }
`;
export const SnackbarError = styled(Snackbar)`
  background-color: #e02020 !important;
  * {
    background-color: #e02020 !important;
  }
`;
