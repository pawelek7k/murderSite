import { Hero } from "../components/HeroSection";
import { Introduction } from "../components/IntroductionSection";
import { ContainerStyles } from "./styles/styles";

export const Home = () => {
  return (
    <>
      <ContainerStyles>
        <Hero />
        <Introduction />
      </ContainerStyles>
    </>
  );
};
