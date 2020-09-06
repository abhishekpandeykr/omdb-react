import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MovieCard from "./MovieCard";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: "40px",
  },
});

export default function MoviesCard(movies) {
  const classes = useStyles();
  console.log(movies);

  const renderMovies = (movies) => {
    return movies.movies.map((movie) => (
      <MovieCard {...movie} key={Math.random()} />
    ));
  };

  return (
    <Grid container spacing={3} className={classes.root}>
      {movies && movies.movies && movies.movies.length
        ? renderMovies(movies)
        : "No Data Found"}
    </Grid>
  );
}
