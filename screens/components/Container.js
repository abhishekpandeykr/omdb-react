import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Header from "../../shared/Header";
import MoviesCard from "./MoviesCard";

const API_END_POINT = `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState("all");
  let timeout;

  useEffect(() => {
    const url = `${API_END_POINT}&s=${currentMovie}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setMovies(result.Search);
        console.log("called");
      });
  }, [currentMovie]);

  function getMovies(event) {
    const value = event.target.value;
    console.log(event.target.value);
    if (timeout) clearTimeout(timeout);
    this.timeout = setTimeout(() => {
      setCurrentMovie(value);
    }, 300);
    // fetchMovies(keyword);
  }

  return (
    <>
      <Container fixed>
        <Header onChange={getMovies} />
        <MoviesCard movies={movies} />
      </Container>
      <h3>THis is test</h3>
    </>
  );
};

export default App;
