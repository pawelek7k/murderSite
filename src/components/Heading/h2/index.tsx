import { StyledHeading } from "../h2/Styles";

interface HeadingProps {
  content: string;
  visually: boolean;
}

export const Heading = ({ content, visually }: HeadingProps) => {
  return <StyledHeading $visually={visually}>{content}</StyledHeading>;
};
