import React from "react";
import NewMovies from "../components/NewMovies";
import { Link } from "react-router-dom";

export default function RecommnendContainer({ movies }) {
  return (
    <NewMovies>
      <h2>New to Disney+</h2>
      <NewMovies.List>
        {movies &&
          movies.newMovies.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <NewMovies.Image
                src={movie.cardImg}
                alt={movie.title}
              ></NewMovies.Image>
            </Link>
          ))}
      </NewMovies.List>
    </NewMovies>
  );
}
