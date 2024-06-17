import { useEffect } from "react";
import { Card, Cards } from "./Styles";

interface MouseProps {
  children: React.ReactNode;
}

export const MouseEffect = ({ children }: MouseProps) => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.getElementsByClassName("cards");
      if (cards) {
        for (const cardContainer of Array.from(cards)) {
          const cardElements = cardContainer.getElementsByClassName("card");
          for (const card of Array.from(cardElements)) {
            const rect = (card as HTMLElement).getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
            (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
          }
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <Cards className="cards">
      <Card className="card">{children}</Card>
    </Cards>
  );
};
