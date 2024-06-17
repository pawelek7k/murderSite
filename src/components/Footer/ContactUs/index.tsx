import { Heading } from "../../Heading/h2";
import { MouseEffect } from "../../MouseEffect";
import { Paragraph } from "../../Paragraph";
import { Form } from "../Form";
import {
  ContactContainer,
  FormWrapper,
  HeadingWrapper,
  Wrapper,
} from "./Styles";

export const ContactUs = () => {
  return (
    <ContactContainer>
      <MouseEffect>
        <Wrapper>
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
        </Wrapper>
      </MouseEffect>
    </ContactContainer>
  );
};
