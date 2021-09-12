import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  margin-top: 50px;
  padding: 0 50px;
`;
const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 30px;
  margin-top: 20px;
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: auto;
  border: 3px solid #2b3041;
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 0 10px 5px -4px #080a12;

  &:hover {
    border: 3px solid #fff;
    transform: scale(1.08);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 15px 5px -3px #080a12;
  }
`;

export default function Recommend({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Recommend.List = function RecommendList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Recommend.Image = function RecommendImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};
