import { useEffect, useState } from "react";
import { Hero } from "../components/Home/HeroSection";
import { Introduction } from "../components/Home/IntroductionSection";
import { ModalWarning } from "../components/Home/ModalWarning";
import { Newsletter } from "../components/Home/Newsletter";
import { Quotes } from "../components/Home/QuotesSection";
import { Main } from "../components/Main";
import { getCookie, setCookie } from "../cookies/cookies";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const modalShown = getCookie("modalShown");
    if (!modalShown) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

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
    setCookie({ name: "modalShown", value: true, days: 30 });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Main>
      <Hero />
      <Quotes />
      <Introduction />
      <Newsletter />
      <ModalWarning show={showModal} onClose={handleCloseModal} />
    </Main>
  );
};
