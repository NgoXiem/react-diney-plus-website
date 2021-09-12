import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  padding: 16px 50px;
  background-color: #090b13;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

const Logo = styled.img`
  width: 70px;
  height: 50px;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 30px;
  // justify-content: space-between;
`;

const Login = styled.button`
  background-color: #0584b5;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  font-weight: 500;
  color: white;
  letter-spacing: 1.2px;
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
  gap: 30px;
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

const Image = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const LogoutBtn = styled(Login)`
  font-size: 0.8em;
  letter-spacing: 1px;
  padding: 5px 0px;
  opacity: 0;
  position: absolute;
  bottom: -25px;
  left: 0;
  min-width: 50px;
`;
const Logout = styled.div`
  max-width: 40px;
  position: relative;

  &:hover {
    ${LogoutBtn} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Logo = function HeaderLogo({ ...restProps }) {
  return <Logo {...restProps}></Logo>;
};

Header.Login = function HeaderLogin({ ...restProps }) {
  return <Login {...restProps}></Login>;
};

Header.Nav = function HeaderNav({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>;
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

Header.Logout = function HeaderLogout({ children, ...restProps }) {
  return <Logout {...restProps}>{children}</Logout>;
};

Header.Image = function HeaderImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

Header.LogoutBtn = function HeaderLogoutBtn({ children, ...restProps }) {
  return <LogoutBtn {...restProps}>{children}</LogoutBtn>;
};
