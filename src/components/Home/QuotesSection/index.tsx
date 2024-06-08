import { Heading } from "../../Heading/h2";
import { ParallaxText } from "../../Parallax";
import { Slider } from "../Slider";
import {
  StyledQuoteIconLeft,
  StyledQuoteIconRight,
  StyledQuotes,
} from "./Styles";

export const Quotes = () => {
  return (
    <>
      <StyledQuotes>
        <ParallaxText baseVelocity={-5}>Police line do not cross</ParallaxText>
        <Heading content={"Quotes"} visually={false} />
        <StyledQuoteIconLeft />
        <Slider />
        <StyledQuoteIconRight />
        <ParallaxText baseVelocity={5}>Warning</ParallaxText>
      </StyledQuotes>
    </>
  );
};
