import { CookieInformation } from "./components/CookiesInfo";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { RouterIndex } from "./routes/RouterIndex";
import "./styles/animations.css";
import "./styles/App.css";
import "./styles/variables.css";

function App() {
  return (
    <>
      <CookieInformation />
      <Header />
      <RouterIndex />
      <Footer />
    </>
  );
}

export default App;
