import { Paragraph } from "../Paragraph";
import { Button, Container } from "./Styles";

interface CookieProps {
  showInfo: boolean;
  handleCloseInfo: () => void;
}

export const CookieInformation = ({
  showInfo,
  handleCloseInfo,
}: CookieProps) => {
  return (
    <Container $show={showInfo}>
      <Paragraph
        content={
          "Our website uses cookies to provide you with the best possible user experience."
        }
      />
      <Button onClick={handleCloseInfo}>I understand</Button>
    </Container>
  );
};
