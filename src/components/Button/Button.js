import React from "react";
import { Button } from "./styled";
export default function ButtonOrange({children, className, color}) {
  
  return (
    <Button className={className} color={color}>
        {children}
    </Button>
  );
}
