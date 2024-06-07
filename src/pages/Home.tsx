import { Hero } from "../components/HeroSection";
import { Introduction } from "../components/IntroductionSection";
import { Quotes } from "../components/QuotesSection";
import { ContainerStyles } from "./styles/styles";

export const Home = () => {
  return (
    <>
      <ContainerStyles>
        <Hero />
        <Quotes />
        <Introduction />
      </ContainerStyles>
    </>
  );
};
