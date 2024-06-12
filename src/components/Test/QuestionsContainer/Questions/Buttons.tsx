import { Dispatch } from "react";
import { Action } from "..";
import { Button } from "../../../Button";
import { BtnsContainer } from "../Styles";

interface ButtonsProps {
  dispatch: Dispatch<Action>;
}

export const Buttons = ({ dispatch }: ButtonsProps) => {
  return (
    <BtnsContainer>
      <Button
        content="Yes"
        onClick={() => dispatch({ type: "start" })}
        bg={true}
      />

      <Button content="No" bg={false} />
    </BtnsContainer>
  );
};
