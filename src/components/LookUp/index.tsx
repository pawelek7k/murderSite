import { StyledLink } from "./Styles";

interface LookUpProps {
  link: string;
  content: string;
}

export const LookUp = ({ link, content }: LookUpProps) => {
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const sectionId = link.substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledLink href={link} onClick={handleLinkClick}>
      {content}
    </StyledLink>
  );
};
