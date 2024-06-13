import information from "../../../../../data/testInformation.json";
import { Item } from "./Item";

interface DataItem {
  id: number;
  content: string;
}

export const List = () => {
  return (
    <ul>
      {information.map((p: DataItem) => (
        <Item key={p.id} content={p.content} index={p.id} />
      ))}
    </ul>
  );
};
