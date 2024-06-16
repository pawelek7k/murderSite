import { Heading } from "../Heading/h2";
import { Paragraph } from "../Paragraph";
import { ContactUs, StyledFooter } from "./Styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <ContactUs>
        <Heading content={"Contact us!"} visually={true} />
        <Paragraph
          content={
            "a laudantium rem saepe eius, qui aspernatur deserunt maiores perferendis, laboriosam culpa reiciendis."
          }
        />
      </ContactUs>
      {/* <Logo positionOnPage={false} />
      <Link
        href={"https://github.com/pawelek7k/murderSite"}
        content={"Github"}
      />
      <Paragraph
        content={
          "a laudantium rem saepe eius, qui aspernatur deserunt maiores perferendis, laboriosam culpa reiciendis."
        }
      /> */}
    </StyledFooter>
  );
};
