import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { ContainerStyles } from "./pages/styles/styles";
import "./styles/App.css";
import "./styles/variables.css";

function App() {
  return (
    <>
      <Header />
      <ContainerStyles>
        <Home />
      </ContainerStyles>
    </>
  );
}

export default App;
