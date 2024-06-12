import { useState } from "react";
import { Main } from "../components/Main";
import { Hero } from "../components/Test/HeroSection";
import { TestContainer } from "../components/Test/QuestionsContainer";

export const Test = () => {
  const [showTestContainer, setShowTestContainer] = useState(false);

  const handleStartClick = () => {
    setShowTestContainer(true);
    setTimeout(() => {
      const element = document.getElementById("testContainer");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };
  return (
    <Main>
      <Hero onStartClick={handleStartClick} />
      {showTestContainer && <TestContainer />}
    </Main>
  );
};
