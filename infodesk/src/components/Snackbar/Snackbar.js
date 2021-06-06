import React, { useState } from "react";
import Slide from "@material-ui/core/Slide";
import { SnackbarError, SnackbarSuccess } from "./styled";

function TransitionUp(props) {
  return <Slide {...props} direction="down" />;
}
export default function DirectionSnackbar({ text, success }) {
  const [open, setOpen] = useState(true);

  return (
    <div>
      {success ? (
        <SnackbarSuccess
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
