import React from "react";
import { Typography } from "@material-ui/core";
import MoviesCard from "./MoviesCard";

const MyWatchList = ({ myMovies }) => {
  return (
    <>
      <Typography variant="h5" style={{ marginTop: "10px" }}>
        My Movie Collection
      </Typography>
      <MoviesCard movies={myMovies} showAddContent={false} />
    </>
  );
};

export default MyWatchList;
