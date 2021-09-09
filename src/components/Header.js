import React from "react";
import styled from "styled-components/macro";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 16px 50px;
  background-color: #090b13;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;

  @media screen and (max-width: 700px) {
    flex-drection: column;
  }
`;

const Logo = styled.img`
  max-width: 70px;
  max-height: 50px;
`;

const Row = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 700px) {
  }
`;

const Link = styled.a`
  display: flex;
  flex-direction: row;
`;

const Icon = styled.img`
  max-width: 20px;
  height: auto;
`;

const Span = styled.span`
  text-transform: uppercase;
  align-self: center;
`;

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Logo = function HeaderLogo({ ...restProps }) {
  return <Logo {...restProps}></Logo>;
};

Header.Row = function ({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Header.Link = function HeaderLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.Icon = function HeaderIcon({ ...restProps }) {
  return <Icon {...restProps}></Icon>;
};
Header.Span = function HeaderSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};
