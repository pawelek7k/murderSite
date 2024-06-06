import { StyledLink } from "./Styles";

interface LookUpProps {
  link: string;
  content: string;
}

export const LookUp = ({ link, content }: LookUpProps) => {
  return <StyledLink href={link}>{content}</StyledLink>;
};
