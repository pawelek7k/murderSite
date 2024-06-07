import Typewriter from "../../TypeWriter";
import { StyledHeading } from "../h2/Styles";

interface HeadingProps {
  content: string;
  visually: boolean;
}

export const Heading = ({ content, visually }: HeadingProps) => {
  return (
    <StyledHeading visually={visually}>
      <Typewriter text={content} delay={100} />{" "}
    </StyledHeading>
  );
};
