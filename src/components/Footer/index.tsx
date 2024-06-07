import { Logo } from "../Logo";
import { StyledFooter } from "./Styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <Logo positionOnPage={false} />
    </StyledFooter>
  );
};
