interface HeadingProps {
  content: string;
}

export const Heading = ({ content }: HeadingProps) => {
  return <h1>{content}</h1>;
};
