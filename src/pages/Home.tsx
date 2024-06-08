import { useEffect, useState } from "react";
import { Hero } from "../components/HeroSection";
import { Introduction } from "../components/IntroductionSection";
import { ModalWarning } from "../components/ModalWarning";
import { Newsletter } from "../components/Newsletter";
import { Quotes } from "../components/QuotesSection";
import { ContainerStyles } from "./styles/styles";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <ContainerStyles>
        <Hero />
        <Quotes />
        <Introduction />
        <Newsletter />
        <ModalWarning show={showModal} onClose={handleCloseModal} />
      </ContainerStyles>
    </>
  );
};
