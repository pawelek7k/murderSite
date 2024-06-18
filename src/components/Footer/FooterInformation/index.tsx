import { Link } from "../../Link";
import { Logo } from "../../Logo";
import { Paragraph } from "../../Paragraph";
import { Wrapper } from "./Styles";

export const FooterInformation = () => {
  return (
    <Wrapper>
      <Logo positionOnPage={false} />
      <Link
        href={"https://github.com/pawelek7k/murderSite"}
        content={"Github"}
      />
      <Paragraph
        content={
          "a laudantium rem saepe eius, qui aspernatur deserunt maiores perferendis, laboriosam culpa reiciendis."
        }
      />
    </Wrapper>
  );
};
