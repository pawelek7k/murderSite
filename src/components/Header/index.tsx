import { Logo } from "../Logo";
import { StyledHeader } from "./Styles";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo positionOnPage={true} />
    </StyledHeader>
  );
};
