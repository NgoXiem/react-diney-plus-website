import React from "react";
import styled from "styled-components/macro";

export function DetailsContainer({ details }) {
  const Container = styled.section`
    padding: 10vh 50px;
    margin-top: 70px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    @media screen and (min-width: 1024px) {
      padding: 20vh 50px;
      gap: 30px;
      font-size: 1.3em;
    }
  `;
  const Title = styled.p`
    font-weight: 600;
    font-size: 1.2em;
    letter-spacing: 1px;
  `;
  const Description = styled.p`
    max-width: 500px;
    font-weight: 500;
    font-size: 1.1em;
    letter-spacing: 0.5px;
    line-height: 23px;
  `;
  const ImgWrapper = styled.div`
    img {
      width: 100%;
      max-width: 400px;
      height: auto;
    }
    @media screen and (min-width: 1024px) {
      img {
        max-width: 500px;
      }
    }
  `;

  const ButtonWhite = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    p {
      font-weight: 500;
    }
    &:hover {
      background-color: #20cbdf;
      transition: all 0.2s ease;
    }
  `;
  const ButtonBlack = styled(ButtonWhite)`
    padding-right: 10px;
    color: white;
    background-color: grey;
  `;

  const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
  `;

  const RoundButton = styled.button`
    border-radius: 60%;
    border: none;
    background-color: grey;
    padding: 0 2px;
    cursor: pointer;
    &:hover {
      background-color: #20cbdf;
      transition: all 0.2s ease;
    }
  `;

  return (
    <Container>
      <ImgWrapper>
        <img src={details.titleImg} alt={details.description} />
      </ImgWrapper>
      <ButtonsWrapper>
        <ButtonWhite>
          <img src="../images/play-icon-black.png" alt="button" />
          <p>PLAY</p>
        </ButtonWhite>
        <ButtonBlack>
          <img src="../images/play-icon-white.png" alt="button" />
          <p>TRAILER</p>
        </ButtonBlack>
        <RoundButton>
          <img src="../images/group-icon.png" alt="button" />
        </RoundButton>
      </ButtonsWrapper>
      <Title>{details.subTitle}</Title>
      <Description>{details.description}</Description>
    </Container>
  );
}
