import { StyledLink } from "./Styles";

interface LinkProps {
  href: string;
  content: string;
}

export const Link = ({ href, content }: LinkProps) => {
  return <StyledLink href={href}>{content}</StyledLink>;
};
