import { Dispatch } from "react";
import { Action } from "..";
import { Button } from "../../../Button";
import { List } from "./List/List";

interface ButtonsProps {
  dispatch: Dispatch<Action>;
}

export const Buttons = ({ dispatch }: ButtonsProps) => {
  return (
    <>
      <List />
      <Button
        content="Yes"
        onClick={() => dispatch({ type: "start" })}
        bg={true}
      />
    </>
  );
};
