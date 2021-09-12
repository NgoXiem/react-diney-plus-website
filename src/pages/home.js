import React from "react";
import HomeContainer from "../containers/home";
import styled from "styled-components/macro";

const Wrapper = styled.section`
  height: 100%;
  background-image: url("../images/login-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export default function Home() {
  return (
    <Wrapper>
      <HomeContainer></HomeContainer>
    </Wrapper>
  );
}
