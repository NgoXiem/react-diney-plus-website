import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 20px 0 50px 0;
  padding: 0 50px;
`;
const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 30px;
  margin: 20px 0 50px 0;
`;

const MovieLink = styled.a`
  img {
    object-fit: contain;
    width: 100%;
    height: auto;
    border: 3px solid #2b3041;
    border-radius: 10px;
    margin: 0 auto;
    box-shadow: 0 10px 5px -4px #080a12;
  }
  img:hover {
    border: 3px solid #fff;
    transform: scale(1.08);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 15px 5px -3px #080a12;
  }
`;

export default function Originals({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Originals.List = function OriginalsList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Originals.MovieLink = function OriginalsMovieLink({ children, ...restProps }) {
  return <MovieLink {...restProps}>{children}</MovieLink>;
};
