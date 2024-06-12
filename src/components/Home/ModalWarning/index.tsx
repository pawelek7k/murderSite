import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { Heading } from "../../Heading/h1";
import { Paragraph } from "../../Paragraph";
import {
  Card,
  CardContent,
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
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.getElementById("cards");
      if (cards) {
        const cardElements = cards.getElementsByClassName("card");
        for (const card of Array.from(cardElements)) {
          const rect = (card as HTMLElement).getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
          (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <ModalWrapper $show={show}>
      <ModalContent id="cards">
        <Card className="card">
          <CardContent>
            <CloseButton onClick={onClose}>
              <IoClose />
            </CloseButton>
            <HeadingWrapper>
              <Heading content={"Warning"} />
              <Paragraph
                content={
                  "This website contains content about murders that may not be suitable for all audiences. Viewer discretion is advised."
                }
              />
            </HeadingWrapper>
          </CardContent>
        </Card>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ModalWarning;
