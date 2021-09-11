import React from "react";
import Recommend from "../components/Recommend";
import { Link } from "react-router-dom";

export default function RecommnendContainer({ movies }) {
  return (
    <Recommend>
      <h2>Recommend for you</h2>
      <Recommend.List>
        {movies &&
          movies.recommend.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <Recommend.Image
                src={movie.cardImg}
                alt={movie.title}
              ></Recommend.Image>
            </Link>
          ))}
      </Recommend.List>
    </Recommend>
  );
}
