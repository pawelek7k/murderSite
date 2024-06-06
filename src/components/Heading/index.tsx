import { StyledHeading } from "./Styles";

interface HeadingProps {
  content: string;
}

export const Heading = ({ content }: HeadingProps) => {
  return <StyledHeading>{content}</StyledHeading>;
};
