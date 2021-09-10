import React, { useState, useEffect } from "react";
import { Carousel } from "../components/Carousel";
import dataSlider from "../dataSlider";

export default function CarouselContainer() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState();
  //   let [num, setNum] = useState(0);
  let num = 0;
  let timer;
  const handleClick = (index) => {
    setActive(index);
  };

  useEffect(() => {
    timer = setInterval(() => {
      num++;
      if (num > dataSlider.length - 1) {
        num = 0;
      }
      setActive(num);
    }, 3000);
    setAuto(timer);
    return () => clearInterval(timer);
  }, []);

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
              handleClick(index);
              num = index;
            }}
            className={index === active ? "active" : ""}
          ></Carousel.Dot>
        ))}
      </Carousel.DotsWrapper>
    </Carousel>
  );
}
