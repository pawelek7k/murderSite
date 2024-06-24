import styled from "styled-components";

interface ParagraphProps {
  content: string;
}

const Styles = styled.p`
  font-family: var(--third-font);
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const Paragraph = ({ content }: ParagraphProps) => {
  return <Styles>{content}</Styles>;
};
