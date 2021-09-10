import React from "react";
import { Viewer } from "../components/Viewer";

export default function ViewerContainer() {
  return (
    <Viewer>
      <Viewer.Button>
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src="../videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
        <img src="../images/viewers-disney.png" alt="disney"></img>
      </Viewer.Button>
      <Viewer.Button>
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src="../videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
        <img src="../images/viewers-pixar.png" alt="pixar"></img>
      </Viewer.Button>
      <Viewer.Button>
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src="../videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
        <img src="../images/viewers-marvel.png" alt="marvel"></img>
      </Viewer.Button>
      <Viewer.Button>
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src="../videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
        <img src="../images/viewers-starwars.png" alt="starwars"></img>
      </Viewer.Button>
      <Viewer.Button>
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source
            src="../videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
        <img src="../images/viewers-national.png" alt="national"></img>
      </Viewer.Button>
    </Viewer>
  );
}
