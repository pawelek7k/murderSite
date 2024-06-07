import paragraphs from "../../data/paragraphs.json";
import { Item } from "./Item";
import { ListStyles } from "./Styles";

interface DataItem {
  id: number;
  content: string;
}

export const List = () => {
  return (
    <ListStyles>
      {paragraphs.map((p: DataItem) => (
        <Item key={p.id} content={p.content} />
      ))}
    </ListStyles>
  );
};
