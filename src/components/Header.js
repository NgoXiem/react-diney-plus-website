import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 16px 50px;
  background-color: #090b13;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

const HomeLink = styled(Link)`
  width: 70px;
  height: 50px;
`;

const Logo = styled.img`
  width: 70px;
  height: 50px;
`;

const Row = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 700px) {
  }
`;

const NavLink = styled(Link)`
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
  font-size: 0.9em;
  font-weight: 500;
  letter-spacing: 0.8px;
  padding-top: 4px;
  position: relative;
  @media screen and (min-width: 767px) {
    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      bottom: -2px;
      left: 0;
      background-color: #fff;
      transform: scaleX(0);
      transform-origin: top left;
      transition: transform 0.3s ease;
    }
    &:hover::after {
      transform: scaleX(1);
    }
  }
`;

export function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Header.HomeLink = function HeaderHomeLink({ ...restProps }) {
  return <HomeLink {...restProps}></HomeLink>;
};
Header.Logo = function HeaderLogo({ ...restProps }) {
  return <Logo {...restProps}></Logo>;
};

Header.Row = function ({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Header.NavLink = function HeaderNavLink({ children, ...restProps }) {
  return <NavLink {...restProps}>{children}</NavLink>;
};

Header.Icon = function HeaderIcon({ ...restProps }) {
  return <Icon {...restProps}></Icon>;
};
Header.Span = function HeaderSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};
