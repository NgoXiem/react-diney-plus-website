import Browse from "./containers/browse";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetails from "./pages/movieDetails";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/browse">
          <Browse></Browse>
        </Route>
        <Route path="/movie/:id">
          <MovieDetails></MovieDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
