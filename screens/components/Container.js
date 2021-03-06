import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Container } from "@material-ui/core";
import { Router, Link } from "@reach/router";
import { navigate } from "@reach/router";

import Header from "../../shared/Header";
import Toaster from "../../shared/SnackBar";
import MoviesCard from "./MoviesCard";
import MyWatchList from "./MyWatchList";

const API_END_POINT = `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}`;

const useStyles = makeStyles({
  fabProgress: {
    position: "absolute",
    top: 300,
    left: 650,
    zIndex: 1,
  },
});

const App = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState("all");
  const [loading, setLoading] = useState(false);
  const [myMovies, setMyMovies] = useState([]);
  const [snackBar, setSnackBar] = useState({
    isVisible: false,
    error: false,
  });
  let timeout;

  useEffect(() => {
    setLoading(true);
    const url = `${API_END_POINT}&s=${currentMovie}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setMovies(result.Search);
        setLoading(false);
      });
  }, [currentMovie]);

  function getMovies(event) {
    const value = event.target.value;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      setCurrentMovie(value);
      navigate(`/`);
    }, 300);
    // fetchMovies(keyword);
  }

  const onClick = (value) => {
    navigate(`${value}`);
  };

  const addToWatchList = (selectedMovie) => {
    const dup = myMovies.filter(
      (movie) => movie.imdbID === selectedMovie.imdbID
    );
    setSnackBar({ isVisible: true, error: dup.length ? true : false });
    if (!dup.length) {
      myMovies.push(selectedMovie);
      setTimeout(() => setSnackBar({ isVisible: false }), 2000);
    } else {
      setTimeout(() => setSnackBar({ error: true, isVisible: false }), 3000);
    }
    console.log(dup, myMovies);
  };

  return (
    <>
      <Container fixed>
        <Header onChange={getMovies} onClick={onClick} />
        {loading && (
          <CircularProgress size={68} className={classes.fabProgress} />
        )}
        <Router>
          {!loading && (
            <MoviesCard
              movies={movies}
              path="/"
              addToWatchList={addToWatchList}
              showAddContent={true}
            />
          )}
          <MyWatchList path="my-watch-list" myMovies={myMovies} />
        </Router>
        <Toaster {...snackBar} />
      </Container>
    </>
  );
};

export default App;
