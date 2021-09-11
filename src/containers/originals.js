import React from "react";
import Originals from "../components/Originals";
import { Link } from "react-router-dom";

export default function RecommnendContainer({ movies }) {
  return (
    <Originals>
      <h2>Originals</h2>
      <Originals.List>
        {movies &&
          movies.originals.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <Originals.Image
                src={movie.cardImg}
                alt={movie.title}
              ></Originals.Image>
            </Link>
          ))}
      </Originals.List>
    </Originals>
  );
}
