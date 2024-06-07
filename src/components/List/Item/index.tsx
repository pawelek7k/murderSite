import React from "react";

interface ItemProps {
  content: string;
}

export const Item: React.FC<ItemProps> = ({ content }) => {
  const [word, ...rest] = content.split(" ");

  return (
    <li>
      <span className="first-word">{word} </span>
      {rest.join(" ")}
    </li>
  );
};
