import styled from "styled-components";

interface ParagraphProps {
  content: string;
}

const Styles = styled.p`
  font-family: var(--third-font);
`;

export const Paragraph = ({ content }: ParagraphProps) => {
  return <Styles>{content}</Styles>;
};
