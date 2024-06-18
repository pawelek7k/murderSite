import { StyledLink } from "./Styles";

interface LinkProps {
  href: string;
  content: string | React.ReactNode;
}

export const Link = ({ href, content }: LinkProps) => {
  return (
    <StyledLink target="_blank" href={href}>
      {content}
    </StyledLink>
  );
};
