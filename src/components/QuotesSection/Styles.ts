import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import styled from "styled-components";

export const StyledQuotes = styled.section`
position: relative;
`;

export const StyledQuoteIconLeft = styled(RiDoubleQuotesL)`
  color: var(--accent);
  position: absolute;
  top: 15%;
  left: 10%;
  font-size: 3rem;
`;

export const StyledQuoteIconRight = styled(RiDoubleQuotesR)`
  color: var(--accent);
  font-size: 3rem;
  position: absolute;
  bottom: 15%;
  right: 10%;
`;