import React, { useState, useEffect } from "react";
import Trending from "../components/Trending";

export default function RecommnendContainer({ movies }) {
  return (
    <Trending>
      <h2>Trending</h2>
      <Trending.List>
        {movies &&
          movies.trending.map((movie, index) => (
            <Trending.MovieLink key={index}>
              <img src={movie.cardImg} alt={movie.title} />
            </Trending.MovieLink>
          ))}
      </Trending.List>
    </Trending>
  );
}
