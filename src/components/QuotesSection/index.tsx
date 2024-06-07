import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
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
        <StyledQuoteIconLeft />
        <Slider />
        <StyledQuoteIconRight />
      </StyledQuotes>
    </>
  );
};
