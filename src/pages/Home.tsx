import { Hero } from "../components/HeroSection";
import { Introduction } from "../components/IntroductionSection";
import { Newsletter } from "../components/Newsletter";
import { Quotes } from "../components/QuotesSection";
import { ContainerStyles } from "./styles/styles";

export const Home = () => {
  return (
    <>
      <ContainerStyles>
        <Hero />
        <Quotes />
        <Introduction />
        <Newsletter />
      </ContainerStyles>
    </>
  );
};
