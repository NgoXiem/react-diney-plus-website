import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  padding: 0 50px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  max-width: 100%;
  @media screen and (max-width: 845px) {
    padding-bottom: 50px;
    padding-top: 50px;
  }

  @media screen and (min-width: 720px) {
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
    margin: 50px 0 50px 0;
    padding-top: 0;
    padding-bottom: 0;
  }
`;
const Button = styled.button`
  background-color: transparent;
  border: 3px solid #727377;
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 0 10px 5px -4px #080a12;
  position: relative;
  cursor: pointer;
  display: grid;
  grid-template-areas: "container";
  position: relative;

  img {
    grid-area: container;
    display: block;
    object-fit: cover;
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
  }
  video {
    grid-area: container;
    width: 100%;
    height: auto;
    border-radius: 8px;
    opacity: 0;
  }
  &:hover {
    transform: scale(1.05);
    border: 3px solid #fff;
    video {
      opacity: 1;
    }
  }
`;

export function Viewer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Viewer.Button = function ViewrerButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
