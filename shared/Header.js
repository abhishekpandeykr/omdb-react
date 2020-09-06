import React from "react";
import { AppBar, Typography, Input } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "none",
    marginTop: "8px",
    marginLeft: "8px",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  heading: {
    width: "100%",
    height: "80px",
    display: "flex",
    flexDirection: "row",
  },
  input: {
    justifyContent: "center",
    marginLeft: "60px",
    marginBottom: "15px",
    color: "white",
  },
}));

const Header = ({ onChange }) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.heading}>
      <Typography variant="h6" className={classes.title}>
        OMDB Data Base
      </Typography>
      <Input
        id="outlined-basic"
        label="Search Movie"
        placeholder="Search Movie"
        variant="outlined"
        onChange={onChange}
        className={classes.input}
      />
    </AppBar>
  );
};

export default Header;
