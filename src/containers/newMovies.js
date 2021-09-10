import React, { useState, useEffect } from "react";
import NewMovies from "../components/NewMovies";

export default function RecommnendContainer({ movies }) {
  return (
    <NewMovies>
      <h2>New to Disney+</h2>
      <NewMovies.List>
        {movies &&
          movies.newMovies.map((movie, index) => (
            <NewMovies.MovieLink key={index}>
              <img src={movie.cardImg} alt={movie.title} />
            </NewMovies.MovieLink>
          ))}
      </NewMovies.List>
    </NewMovies>
  );
}
