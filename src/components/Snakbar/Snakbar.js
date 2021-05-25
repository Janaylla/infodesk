import React, { useState } from "react";
import Slide from "@material-ui/core/Slide";
import { SnackbarError, SnackbarSucess } from "./Styled";

function TransitionUp(props) {
  return <Slide {...props} direction="down" />;
}
export default function DirectionSnackbar({ text, sucess }) {
  const [open, setOpen] = useState(true);

  return (
    <div>
      {sucess ? (
        <SnackbarSucess
          open={open}
          onClose={() => setOpen(false)}
          TransitionComponent={TransitionUp}
          message={text}
          key={"erro"}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        />
      ) : (
        <SnackbarError
          open={open}
          onClose={() => setOpen(false)}
          TransitionComponent={TransitionUp}
          message={text}
          key={"erro"}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        />
      )}
    </div>
  );
}
