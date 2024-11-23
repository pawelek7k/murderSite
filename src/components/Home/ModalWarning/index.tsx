import React from "react";
import { IoClose } from "react-icons/io5";
import { Button } from "../../Button";
import { Heading } from "../../Heading/h1";
import { MouseEffect } from "../../MouseEffect";
import { Paragraph } from "../../Paragraph";
import {
  CloseButton,
  HeadingWrapper,
  ModalContent,
  ModalWrapper,
} from "./Styles";

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

export const ModalWarning: React.FC<ModalProps> = ({ show, onClose }) => {
  return (
    <ModalWrapper $show={show}>
      <ModalContent className="cards">
        <MouseEffect>
          <CloseButton onClick={onClose}>
            <IoClose />
          </CloseButton>
          <HeadingWrapper>
            <Heading content={"Warning"} />
            <Paragraph>
              This website contains content about murders that may not be
              suitable for all audiences. Viewer discretion is advised.
            </Paragraph>
            <Button content={"I understand"} bg={false} onClick={onClose} />
          </HeadingWrapper>
        </MouseEffect>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ModalWarning;
