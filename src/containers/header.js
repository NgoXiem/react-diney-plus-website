import { Header } from "../components/Header";

export default function HeaderContainer() {
  return (
    <Header>
      <Header.HomeLink to="/">
        <Header.Logo src="../images/logo.svg" alt="logo"></Header.Logo>
      </Header.HomeLink>
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
          <Header.Icon src="../images/watchlist-icon.svg" alt=""></Header.Icon>
          <Header.Span>Watchlist</Header.Span>
        </Header.NavLink>
        <Header.NavLink to="/browse">
          <Header.Icon src="../images/original-icon.svg" alt=""></Header.Icon>
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
    </Header>
  );
}
