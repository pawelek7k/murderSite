import { useEffect, useState } from "react";
import { Button } from "../../Button";
import { Heading } from "../../Heading/h2";
import { Paragraph } from "../../Paragraph";
import { Modal } from "./Modal";
import { Section } from "./Styles";

export const Newsletter = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };

    if (showModal) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal]);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Section>
      <Heading $visually={true}>Newsletter</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. temporibus
        consequatur laudantium, minus veritatis aliquam vero suscipit molestiae
        obcaecati tempore. Incidunt, numquam libero!
      </Paragraph>
      <Button
        content={"Subscribe"}
        bg={true}
        onClick={() => setShowModal(true)}
      />
      <Modal onClose={handleCloseModal} show={showModal} />
    </Section>
  );
};
