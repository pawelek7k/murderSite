import { StyledButton } from "./Styles";

interface ButtonProps {
  content: string;
}

export const Button = ({ content }: ButtonProps) => {
  return <StyledButton>{content}</StyledButton>;
};
