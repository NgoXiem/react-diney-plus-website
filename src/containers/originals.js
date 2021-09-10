import React, { useState, useEffect } from "react";
import Originals from "../components/Originals";

export default function RecommnendContainer({ movies }) {
  return (
    <Originals>
      <h2>Originals</h2>
      <Originals.List>
        {movies &&
          movies.originals.map((movie, index) => (
            <Originals.MovieLink key={index}>
              <img src={movie.cardImg} alt={movie.title} />
            </Originals.MovieLink>
          ))}
      </Originals.List>
    </Originals>
  );
}
