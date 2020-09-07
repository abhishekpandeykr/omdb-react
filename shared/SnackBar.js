import React from "react";
import { Alert } from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";

const Toaster = ({ snackBar }) => {
  console.log(snackBar);
  return (
    <Snackbar open={snackBar}>
      <Alert severity="success" color="success">
        Movie added to the Watchlist
      </Alert>
    </Snackbar>
  );
};

export default Toaster;
