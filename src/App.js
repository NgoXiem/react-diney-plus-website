import "./App.css";
import CarouselContainer from "./containers/carousel";
import HeaderContainer from "./containers/header";
import ViewerContainer from "./containers/viewer";

function App() {
  return (
    <div className="App">
      <HeaderContainer></HeaderContainer>
      <CarouselContainer></CarouselContainer>
      <ViewerContainer></ViewerContainer>
    </div>
  );
}

export default App;
