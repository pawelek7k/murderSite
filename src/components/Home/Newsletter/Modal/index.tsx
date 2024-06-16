import { IoClose } from "react-icons/io5";
import { Heading } from "../../../Heading/h2";
import {
  Card,
  CardContent,
  CloseButton,
  HeadingWrapper,
  ModalContent,
  ModalWrapper,
} from "../../ModalWarning/Styles";
import { Form } from "./Form";

interface ModalProps {
  onClose: () => void;
  show: boolean;
}

export const Modal = ({ onClose, show }: ModalProps) => {
  return (
    <ModalWrapper $show={show}>
      <ModalContent id="cards">
        <Card className="card">
          <CardContent>
            <CloseButton onClick={onClose}>
              <IoClose />
            </CloseButton>
            <HeadingWrapper>
              <Heading content={"Subscribe for crime news!"} visually={true} />
              <Form />
            </HeadingWrapper>
          </CardContent>
        </Card>
      </ModalContent>
    </ModalWrapper>
  );
};
