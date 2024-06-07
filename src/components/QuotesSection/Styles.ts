import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import styled from "styled-components";

export const StyledQuotes = styled.section`
position: relative;
`;

export const StyledQuoteIconLeft = styled(RiDoubleQuotesL)`
  color: var(--secondary);
  position: absolute;
  top: 0;
  left: 10%;
  font-size: 3rem;
`;

export const StyledQuoteIconRight = styled(RiDoubleQuotesR)`
  color: var(--secondary);
  font-size: 3rem;
  position: absolute;
  bottom: 0;
  right: 10%;
`;