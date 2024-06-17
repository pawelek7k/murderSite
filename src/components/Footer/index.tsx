import { Heading } from "../Heading/h2";
import { MouseEffect } from "../MouseEffect";
import { Paragraph } from "../Paragraph";
import { ContactUs, StyledFooter } from "./Styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <ContactUs>
        <MouseEffect>
          <Heading content={"Contact us!"} visually={true} />
          <Paragraph
            content={
              "a laudantium rem saepe eius, qui aspernatur deserunt maiores perferendis, laboriosam culpa reiciendis."
            }
          />
        </MouseEffect>
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
