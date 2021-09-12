import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router";

export default function HeaderContainer() {
  let history = useHistory();
  const [user, setUser] = useState();
  const [userImg, setUserImg] = useState();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const existUser = localStorage.getItem("user");
    if (existUser) {
      setUser(existUser);
    }
  }, []);

  const handleSignIn = () => {
    if (!user) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
          localStorage.setItem("user", JSON.stringify(result.user));
          history.push("/browse");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (user) {
      signOut(auth)
        .then(() => {
          setUser(null);
          history.push("/");
          localStorage.removeItem("user");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserImg(user.photoURL);
    } else {
      history.push("/");
    }
  });

  return (
    <Header>
      <Header.Logo src="../images/logo.svg" alt="logo"></Header.Logo>
      {!user ? (
        <Header.Login onClick={() => handleSignIn()}>Login</Header.Login>
      ) : (
        <Header.Nav>
          <Header.Row>
            <Header.NavLink to="/browse">
              <Header.Icon src="../images/home-icon.svg" alt=""></Header.Icon>
              <Header.Span>Home</Header.Span>
            </Header.NavLink>
            <Header.NavLink to="/browse">
              <Header.Icon src="../images/search-icon.svg" alt=""></Header.Icon>
              <Header.Span>Search</Header.Span>
            </Header.NavLink>
            <Header.NavLink to="/browse">
              <Header.Icon
                src="../images/watchlist-icon.svg"
                alt=""
              ></Header.Icon>
              <Header.Span>Watchlist</Header.Span>
            </Header.NavLink>
            <Header.NavLink to="/browse">
              <Header.Icon
                src="../images/original-icon.svg"
                alt=""
              ></Header.Icon>
              <Header.Span>Originals</Header.Span>
            </Header.NavLink>
            <Header.NavLink to="/browse">
              <Header.Icon src="../images/movie-icon.svg" alt=""></Header.Icon>
              <Header.Span>Movies</Header.Span>
            </Header.NavLink>
            <Header.NavLink to="/browse">
              <Header.Icon src="../images/series-icon.svg" alt=""></Header.Icon>
              <Header.Span>Series</Header.Span>
            </Header.NavLink>
          </Header.Row>

          <Header.Logout>
            <Header.Image src={userImg} alt={userImg}></Header.Image>
            <Header.LogoutBtn onClick={() => handleSignIn()}>
              Log out
            </Header.LogoutBtn>
          </Header.Logout>
        </Header.Nav>
      )}
    </Header>
  );
}
