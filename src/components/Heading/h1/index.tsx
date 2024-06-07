import Typewriter from "../../TypeWriter";
import { StyledHeading } from "./Styles";

interface HeadingProps {
  content: string;
}

export const Heading = ({ content }: HeadingProps) => {
  return (
    <StyledHeading>
      <Typewriter text={content} delay={100} />{" "}
    </StyledHeading>
  );
};
