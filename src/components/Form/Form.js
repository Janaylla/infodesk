import React from "react";
import { Main, Title, ContainerInput, ButtonSubmit } from "./Styled";

export default function Form({ children, labelButton, title, onSubmit }) {
  return (
    <Main onSubmit={onSubmit}>
      <Title>{title}</Title>
      <ContainerInput>{children}</ContainerInput>
      <ButtonSubmit type="submit">{labelButton}</ButtonSubmit>
    </Main>
  );
}
