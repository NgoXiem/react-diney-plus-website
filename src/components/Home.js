import React from "react";
import styled from "styled-components/macro";

const Container = styled.section``;

export function HomeContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
