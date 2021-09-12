import React, { useState, useEffect } from "react";
import { Carousel } from "../components/Carousel";
import dataSlider from "../dataSlider";

export default function CarouselContainer() {
  let [active, setActive] = useState(0);
  const [auto, setAuto] = useState();

  let num = 0;
  let timer;

  useEffect(() => {
    if (active > dataSlider.length - 1) {
      setActive(0);
    }
    if (active < 0) {
      setActive(dataSlider.length - 1);
    }
  }, [active]);

  useEffect(() => {
    timer = setInterval(() => {
      active++;
      if (active > dataSlider.length - 1) {
        setActive(0);
      }
      if (active < 0) {
        setActive(dataSlider.length - 1);
      }
      setActive(active);
    }, 3000);
    setAuto(timer);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <Carousel>
      <Carousel.ImagesWrapper>
        {dataSlider.map((item, index) => (
          <Carousel.Link key={index}>
            <Carousel.Image
              className={index === active ? "active" : ""}
              src={`../images/${item.path}`}
            ></Carousel.Image>
          </Carousel.Link>
        ))}
      </Carousel.ImagesWrapper>

      <Carousel.DotsWrapper>
        {Array.from({ length: 4 }).map((item, index) => (
          <Carousel.Dot
            key={index}
            onClick={() => {
              clearInterval(auto);
              setActive(index);
            }}
            className={index === active ? "active" : ""}
          ></Carousel.Dot>
        ))}
      </Carousel.DotsWrapper>

      <Carousel.ButtonLeft
        onClick={() => {
          setActive(active - 1);
        }}
      >
        <i className="fas fa-chevron-left fa-lg"></i>
      </Carousel.ButtonLeft>
      <Carousel.ButtonRight
        onClick={() => {
          setActive(active + 1);
        }}
      >
        <i className="fas fa-chevron-right fa-lg"></i>
      </Carousel.ButtonRight>
    </Carousel>
  );
}
