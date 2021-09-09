import React from "react";
import styled from "styled-components/macro";
// import Link from "react-router-dom";

const Container = styled.div`
  padding: 0 50px 0 50px;
  margin-top: 100px;
  display: grid;
  grid-template-areas: "container";
  grid-template-rows: 1fr;
`;
const ImagesWrapper = styled.div`
  position: relative;
  grid-area: "container";
`;
const ImageLink = styled.a``;
const Image = styled.img`
  position: absolute;
  border-radius: 10px;
  width: 100%;
  height: auto;
  clip-path: circle(0% at 0 50%);

  &.active {
    clip-path: circle(150% at 0 50%);
  }
`;
const DotsWrapper = styled.div`
  grid-area: container;
  align-self: start;
  justify-self: center;
  z-index: 2;
  position: absolute;
  display: flex;
  justify-content: center;
`;
const Dot = styled.span`
  height: 10px;
  width: 10px;
  background-color: #727377;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 10px;
  padding: 2px;

  &.active {
    background-color: #dae1cc;
  }
`;

export default function Carousel({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Carousel.ImagesWrapper = function CarouselImagesWrapper({
  children,
  ...restProps
}) {
  return <ImagesWrapper {...restProps}>{children}</ImagesWrapper>;
};

Carousel.ImageLink = function CarouselImageLink({ children, ...restProps }) {
  return <ImageLink {...restProps}>{children}</ImageLink>;
};

Carousel.Image = function CarouselImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

Carousel.DotsWrapper = function CarouselDotsWrapper({
  children,
  ...restProps
}) {
  return <DotsWrapper {...restProps}>{children}</DotsWrapper>;
};

Carousel.Dot = function CarouselDot({ children, ...restProps }) {
  return <Dot {...restProps}>{children}</Dot>;
};
