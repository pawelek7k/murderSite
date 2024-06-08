import { Link } from "../Link";
import { Logo } from "../Logo";
import { Paragraph } from "../Paragraph";
import { StyledFooter } from "./Styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <Logo positionOnPage={false} />
      <Link
        href={"https://github.com/pawelek7k/murderSite"}
        content={"https://github.com/pawelek7k/murderSite"}
      />
      <Paragraph
        content={
          "a laudantium rem saepe eius, qui aspernatur deserunt maiores perferendis, laboriosam culpa reiciendis."
        }
      />
    </StyledFooter>
  );
};
