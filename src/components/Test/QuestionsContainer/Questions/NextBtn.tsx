import { Dispatch } from "react";
import { Action } from "..";
import { Button } from "../../../Button";

interface BtnProps {
  dispatch: Dispatch<Action>;
  answer: number | null;
}

export const NextBtn = ({ dispatch, answer }: BtnProps) => {
  if (answer === null) return null;
  return (
    <Button
      onClick={() => dispatch({ type: "nextQuestion" })}
      content={"Next"}
      bg={false}
    />
  );
};
