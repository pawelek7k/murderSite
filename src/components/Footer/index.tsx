import { Heading } from "../Heading/h2";
import { MouseEffect } from "../MouseEffect";
import { Paragraph } from "../Paragraph";
import { Form } from "./Form";
import { ContactUs, FormWrapper, HeadingWrapper, StyledFooter } from "./Styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <ContactUs>
        <MouseEffect>
          <HeadingWrapper>
            <Heading content={"Contact us!"} visually={true} />
          </HeadingWrapper>
          <FormWrapper>
            <Paragraph
              content={
                "a laudantium rem saepe eius, qui aspernatur deserunt maiores perferendis, laboriosam culpa reiciendis."
              }
            />
            <Form />
          </FormWrapper>
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
