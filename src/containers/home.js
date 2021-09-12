import React from "react";
import { Home } from "../components/Home";

export default function HomeContainer() {
  return (
    <Home>
      <Home.Wrap>
        <img src="../images/cta-logo-two.png" alt="logo-two"></img>
        <button type="button"> Get All There</button>
        <p>
          Get Premier to Raya and the Last Dragon for an additional fee with a
          Disney+ description.
          <br />
          As of 3/12/2021, the price of Disney+ and The Disney Bundle will
          increase by $1.
        </p>
      </Home.Wrap>
    </Home>
  );
}
