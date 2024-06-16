import { useEffect, useState } from "react";
import { Button } from "../../Button";
import { Heading } from "../../Heading/h2";
import { Paragraph } from "../../Paragraph";
import { Section } from "./Styles";
import { Modal } from "./Modal";

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
      <Heading content={"Newsletter"} visually={true} />
      <Paragraph
        content={
          " Lorem ipsum dolor sit amet, consectetur adipisicing elit.  temporibus consequatur laudantium, minus veritatis aliquam vero suscipit molestiae obcaecati tempore. Incidunt, numquam libero!"
        }
      />
      <Button
        content={"Subscribe"}
        bg={true}
        onClick={() => setShowModal(true)}
      />
      <Modal onClose={handleCloseModal} show={showModal} />
    </Section>
  );
};
