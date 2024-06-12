import { StyledButton } from "./Styles";

interface ButtonProps {
  content: string;
  onClick?: () => void;
  bg: boolean;
}

export const Button = ({ content, onClick = () => {}, bg }: ButtonProps) => {
  return (
    <StyledButton $bg={bg} onClick={onClick}>
      {content}
    </StyledButton>
  );
};
