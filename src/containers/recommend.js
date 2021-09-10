import React, { useState, useEffect } from "react";
import Recommend from "../components/Recommend";

export default function RecommnendContainer({ movies }) {
  return (
    <Recommend>
      <h2>Recommend for you</h2>
      <Recommend.List>
        {movies &&
          movies.recommend.map((movie, index) => (
            <Recommend.MovieLink key={index}>
              <img src={movie.cardImg} alt={movie.title} />
            </Recommend.MovieLink>
          ))}
      </Recommend.List>
    </Recommend>
  );
}
