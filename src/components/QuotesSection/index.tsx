import { Heading } from "../Heading/h2";
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
        <Heading content={"Quotes"} visually={false} />
        <StyledQuoteIconLeft />
        <Slider />
        <StyledQuoteIconRight />
      </StyledQuotes>
    </>
  );
};
