import React, { useState, useEffect } from "react";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import RecommnendContainer from "./recommend";
import NewMoviesContainer from "./newMovies";
import OriginalsContainer from "./originals";
import TrendingContainer from "./trending";
import HeaderContainer from "./header";
import CarouselContainer from "./carousel";
import ViewerContainer from "./viewer";

export default function Browse() {
  const [movies, setMovies] = useState();
  let recommend = [];
  let newMovies = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    const getmovies = async (db) => {
      const moviesCol = collection(db, "movies");
      const movieSnapshot = await getDocs(moviesCol);
      movieSnapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommend = [...recommend, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newMovies = [...newMovies, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });
      setMovies({
        recommend: recommend,
        newMovies: newMovies,
        originals: originals,
        trending: trending,
      });
    };
    getmovies(db);
  }, [db]);

  return (
    <>
      <HeaderContainer></HeaderContainer>
      <CarouselContainer></CarouselContainer>
      <ViewerContainer></ViewerContainer>
      <RecommnendContainer movies={movies}></RecommnendContainer>
      <NewMoviesContainer movies={movies}></NewMoviesContainer>
      <OriginalsContainer movies={movies}></OriginalsContainer>
      <TrendingContainer movies={movies}></TrendingContainer>
    </>
  );
}
