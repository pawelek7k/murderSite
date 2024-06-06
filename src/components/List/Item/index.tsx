import { motion } from "framer-motion";
import React from "react";

interface ItemProps {
  content: string;
}

const variant = {
  initial: {
    opacity: 0,
    x: -50,
  },

  animate: {
    opacity: 1,
    x: 0,
  },
};

export const Item: React.FC<ItemProps> = ({ content }) => {
  const [word, ...rest] = content.split(" ");

  return (
    <motion.li variants={variant}>
      <span className="first-word">{word} </span>
      {rest.join(" ")}
    </motion.li>
  );
};
