import React from "react";
import { Button } from "./styled";
export default function ButtonOrange({children, className}) {
  return (
    <Button className={className}>
        {children}
    </Button>
  );
}
