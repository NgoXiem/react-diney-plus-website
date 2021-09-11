import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  padding: 0 50px 0 50px;
  margin-top: 100px;
  position: relative;
`;
const ImagesWrapper = styled.div`
  display: grid;
  grid-template-areas: "link";
  position: relative;
  overflow: hidden;
`;
const Link = styled.a`
  grid-area: link;
`;
const Image = styled.img`
  border-radius: 10px;
  width: 100%;
  height: auto;
  clip-path: circle(0% at 0 50%);

  &.active {
    clip-path: circle(150% at 0 50%);
  }
`;
const DotsWrapper = styled.div`
  margin-top: 3px;
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

const ButtonsWrapper = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 40%;
`;

export function Carousel({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Carousel.ImagesWrapper = function CarouselImagesWrapper({
  children,
  ...restProps
}) {
  return <ImagesWrapper {...restProps}>{children}</ImagesWrapper>;
};

Carousel.Link = function CarouselLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
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

Carousel.ButtonsWrapper = function CarouselButtonsWrapper({
  children,
  ...restProps
}) {
  return <ButtonsWrapper {...restProps}>{children}</ButtonsWrapper>;
};

Carousel.Dot = function CarouselDot({ children, ...restProps }) {
  return <Dot {...restProps}>{children}</Dot>;
};
