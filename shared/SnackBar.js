import React from "react";
import { Alert } from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";

const Toaster = (snackBar) => {
  const SUCCESS_MESSAGE = "Movie added to the Watchlist";
  const ERROR_MESSAGE = " Movie already Exist in to the Watchlist";
  console.log(snackBar);
  const color = snackBar.error ? "error" : "success";
  return (
    <Snackbar open={snackBar.isVisible}>
      <Alert severity={snackBar.error ? "error" : "success"} color={color}>
        {snackBar.error ? ERROR_MESSAGE : SUCCESS_MESSAGE}
      </Alert>
    </Snackbar>
  );
};

export default Toaster;
