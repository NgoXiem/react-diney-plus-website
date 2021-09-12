import React from "react";
import styled from "styled-components/macro";

const Container = styled.section`
  padding: 50% 10vw;
  height: 100vh;
  @media screen and (min-width: 1025px) {
    padding: 40vh 10vw;
  }
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: auto;
  }
  button {
    background-color: #0584b5;
    color: white;
    border-radius: 5px;
    border: none;
    width: 100%;
    padding: 20px 0;
    font-weight: 600;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    max-width: 800px;
  }
  p {
    text-align: center;
    letter-spacing: 1px;
    line-height: 20px;
    font-weight: 500;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.2em;
  }
`;

export function Home({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Home.Wrap = function HomeWrap({ children, ...restProps }) {
  return <Wrap {...restProps}>{children}</Wrap>;
};
