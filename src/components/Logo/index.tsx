import { LogoWrapper, StyledCaption, StyledLogo } from "./Styles";

export const Logo = () => {
  return (
    <LogoWrapper>
      <a>
        <StyledLogo>
          Ice<span>berg</span>
        </StyledLogo>
      </a>
      <StyledCaption>The most brutal murders</StyledCaption>
    </LogoWrapper>
  );
};
