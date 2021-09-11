import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import HeaderContainer from "../containers/header";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import { DetailsContainer } from "../containers/details";
import styled from "styled-components/macro";

export default function MovieDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState();

  useEffect(() => {
    const getmovies = async (db, id) => {
      const moviesCol = collection(db, "movies");
      const movieSnapshot = await getDocs(moviesCol);
      const moviesList = movieSnapshot.docs;
      const singleMovie = moviesList.filter((doc) => {
        return doc.id === id;
      });
      singleMovie.map((doc) => setDetails(doc.data()));
    };
    getmovies(db, id);
  }, [id]);

  const Wrapper = styled.main`
    background-image: url(${details && details.backgroundImg});
    background-position: bottom right;
    background-size: cover;
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 70px);
  `;

  return (
    <Wrapper>
      <HeaderContainer></HeaderContainer>
      {details && <DetailsContainer details={details}></DetailsContainer>}
    </Wrapper>
  );
}
