import { Dispatch } from "react";
import { Action } from "..";
import { Button } from "../../../Button";
import { BtnsContainer } from "../Styles";
import { List } from "./List/List";

interface ButtonsProps {
  dispatch: Dispatch<Action>;
}

export const Buttons = ({ dispatch }: ButtonsProps) => {
  return (
    <>
      <List />
      <BtnsContainer>
        <Button
          content="Yes"
          onClick={() => dispatch({ type: "start" })}
          bg={true}
        />
      </BtnsContainer>
    </>
  );
};
