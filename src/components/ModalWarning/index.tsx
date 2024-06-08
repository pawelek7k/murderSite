import { IoClose } from "react-icons/io5";
import { Heading } from "../Heading/h2";
import { Paragraph } from "../Paragraph";
import { CloseButton, ModalContent, ModalWrapper } from "./Styles";

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

export const ModalWarning = ({ show, onClose }: ModalProps) => {
  return (
    <ModalWrapper $show={show}>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <IoClose />
        </CloseButton>
        <Heading content={"Warning"} visually={true} />
        <Paragraph
          content={
            "This website contains content about murders that may not be suitable for all audiences. Viewer discretion is advised."
          }
        />
      </ModalContent>
    </ModalWrapper>
  );
};
