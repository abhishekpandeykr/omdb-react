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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    flexGrow: 1,
  },
});

export default function MovieCard({ movie, addToWatchList, showAddContent }) {
  console.log(movie, addToWatchList);
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={4}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={movie.title}
            height="100%"
            image={movie.Poster}
            title={movie.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {movie.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ display: "flex", flexDirection: "column" }}>
          <Button disabled>{movie.Title}</Button>
          {showAddContent ? (
            <Button
              size="small"
              color="primary"
              onClick={() => addToWatchList(movie)}
            >
              Add to My Content
            </Button>
          ) : null}
        </CardActions>
      </Card>
    </Grid>
  );
}
