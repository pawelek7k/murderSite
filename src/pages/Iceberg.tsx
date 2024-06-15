import { useEffect } from "react";
import { Hero } from "../components/Iceberg/HeroSection";

export const Iceberg = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
    </>
  );
};
