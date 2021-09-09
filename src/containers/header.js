import { Header } from "../components";

export default function HeaderContainer() {
  return (
    <Header>
      <Header.Logo src="../images/logo.svg" alt="logo"></Header.Logo>
      <Header.Row>
        <Header.Link>
          <Header.Icon src="../images/home-icon.svg" alt=""></Header.Icon>
          <Header.Span>Home</Header.Span>
        </Header.Link>
        <Header.Link>
          <Header.Icon src="../images/search-icon.svg" alt=""></Header.Icon>
          <Header.Span>Search</Header.Span>
        </Header.Link>
        <Header.Link>
          <Header.Icon src="../images/watchlist-icon.svg" alt=""></Header.Icon>
          <Header.Span>Watchlist</Header.Span>
        </Header.Link>
        <Header.Link>
          <Header.Icon src="../images/original-icon.svg" alt=""></Header.Icon>
          <Header.Span>Originals</Header.Span>
        </Header.Link>
        <Header.Link>
          <Header.Icon src="../images/movie-icon.svg" alt=""></Header.Icon>
          <Header.Span>Movies</Header.Span>
        </Header.Link>
        <Header.Link>
          <Header.Icon src="../images/series-icon.svg" alt=""></Header.Icon>
          <Header.Span>Series</Header.Span>
        </Header.Link>
      </Header.Row>
    </Header>
  );
}
