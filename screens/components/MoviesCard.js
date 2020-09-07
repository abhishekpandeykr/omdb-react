import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Box, Grid } from "@material-ui/core";
import MovieCard from "./MovieCard";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: "40px",
  },
  noDatFound: {
    margin: "0 auto",
  },
});

export default function MoviesCard({ movies, addToWatchList, showAddContent }) {
  const classes = useStyles();

  const renderMovies = (movies) => {
    return movies.map((movie) => (
      <MovieCard
        movie={movie}
        key={Math.random()}
        addToWatchList={addToWatchList}
        showAddContent={showAddContent}
      />
    ));
  };

  return (
    <Grid container spacing={3} className={classes.root}>
      {movies && movies.length ? (
        renderMovies(movies)
      ) : (
        <Box
          component="div"
          className={classes.noDatFound}
          display={{ xs: "block", md: "block" }}
        >
          No Data Found
        </Box>
      )}
    </Grid>
  );
}
