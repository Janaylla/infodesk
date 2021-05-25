import styled from "styled-components";
import { LinearProgress } from "@material-ui/core";

const colorRedTheme = "#e02020";
export const DivLog = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4.406rem 0 0rem 0;
`;
export const Link = styled.a`
  text-align: center;
  width: 100%;
  height: 1.125rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  color: black;
  :hover {
    text-decoration: underline;
  }
`;

export const ProfileContainer = styled.div`
  width: 100%;
  margin: 0 0 1rem;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: #ffffff;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    object-fit: contain;
    cursor: pointer;
  }
`;
export const PersonalData = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5em 1rem;
  justify-content: space-between;
  align-items: flex-start;
  > svg {
    margin: 0.5rem 0rem 0 0;
  }
`;
export const AddressData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #eeeeee;

  padding: 0.5em 1rem;
`;
export const Address = styled.div`
  width: 100%;
  height: 1.125rem;
  margin: 0 0 0.5rem 0;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`;
export const Line = styled.hr`
  width: calc(100% - 2rem);
  height: 0.063rem;
  margin: 0.5rem 1rem 0.438rem;
  border: solid 1px black;
`;
export const History = styled.div`
  p {
    width: 100%;
    height: 1.125rem;
    margin: 1rem 0rem 0.5rem;
    padding: 0 1rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: black;
  }
`;
export const Order = styled.div`
  > p {
    width: 100%;
    height: 1.125rem;
    opacity: 0.89;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
  }
`;
export const ProfileText = styled.div`
  width: calc(100% - 2rem);
  p {
    width: 100%;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: black;
    margin: 0.5rem 0;
  }
`;
export const DivConsteinerError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;

  #main {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    svg {
      width: 7.875rem;
      height: 4.063rem;
    }
    p {
      font-family: Roboto;
      font-size: 1rem;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.39px;
      color: black;
      margin: 1rem;
    }
  }
`;
export const LinearProgressGlobal = styled(LinearProgress)`
  background-color: #e0202080 !important;
  color: #e02020;
  * {
    background-color: #e02020 !important;
  }
`;

export const Button = styled.button`
  border-radius: 2px;
  width: 100% /*18.5rem*/;
  height: 2.625rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
  border: none;
  cursor: pointer;
  background-color: ${({disable}) => disable?"rgba(232, 34, 46, 0.5)": "#e8222e"};
  cursor: ${({disable}) => disable?"not-allowed": "pointer"};
`;

export const DivPadding = styled.div`
  padding: 1rem 1rem 0 1rem;
`