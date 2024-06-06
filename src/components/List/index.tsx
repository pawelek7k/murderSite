import paragraphs from "../../data/paragraphs.json";
import { Item } from "./Item";
import { ListStyles } from "./Styles";

interface DataItem {
  id: number;
  content: string;
}

const variant = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const List = () => {
  return (
    <ListStyles variants={variant} initial="initial" animate="animate">
      {paragraphs.map((p: DataItem) => (
        <Item key={p.id} content={p.content} />
      ))}
    </ListStyles>
  );
};
