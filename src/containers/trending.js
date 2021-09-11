import React from "react";
import Trending from "../components/Trending";
import { Link } from "react-router-dom";
export default function RecommnendContainer({ movies }) {
  return (
    <Trending>
      <h2>Trending</h2>
      <Trending.List>
        {movies &&
          movies.trending.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <Trending.Image
                src={movie.cardImg}
                alt={movie.title}
              ></Trending.Image>
            </Link>
          ))}
      </Trending.List>
    </Trending>
  );
}
