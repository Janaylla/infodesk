import React from "react";
import { Button } from "./styled";
export default function ButtonOrange({children, className, color, onClick, type}) {
  
  return (
    <Button className={className} color={color} onClick={onClick} type={type || "button"}>
        {children}
    </Button>
  );
}
