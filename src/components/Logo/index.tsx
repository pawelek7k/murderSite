import { LogoWrapper, StyledCaption, StyledLogo } from "./Styles";

interface LogoProps {
  positionOnPage: boolean;
}

export const Logo = ({ positionOnPage }: LogoProps) => {
  return (
    <LogoWrapper $positionOnPage={positionOnPage}>
      <a>
        <StyledLogo>
          Ice<span>berg</span>
        </StyledLogo>
      </a>
      <StyledCaption>The most brutal murders</StyledCaption>
    </LogoWrapper>
  );
};
