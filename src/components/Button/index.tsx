import { StyledButton } from "./Styles";

interface ButtonProps {
  content: string;
  onClick?: () => void;
}

export const Button = ({ content, onClick = () => {} }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{content}</StyledButton>;
};
