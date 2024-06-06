interface ParagraphProps {
  content: string;
}

export const Paragraph = ({ content }: ParagraphProps) => {
  return <p>{content}</p>;
};
