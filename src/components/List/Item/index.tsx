import { motion } from "framer-motion";
import React from "react";

interface ItemProps {
  content: string;
  index: number;
}

export const Item: React.FC<ItemProps> = ({ content, index }) => {
  const [word, ...rest] = content.split(" ");

  return (
    <motion.li
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
    >
      <span className="first-word">{word} </span>
      {rest.join(" ")}
    </motion.li>
  );
};
