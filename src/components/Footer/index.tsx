import { ContactUs } from "./ContactUs";
import { FooterInformation } from "./FooterInformation";
import { StyledFooter } from "./Styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <ContactUs />
      <FooterInformation />
    </StyledFooter>
  );
};
