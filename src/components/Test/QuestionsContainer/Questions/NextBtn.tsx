import { Dispatch } from "react";
import { Action } from "..";

interface BtnProps {
  dispatch: Dispatch<Action>;
  answer: number | null;
}

export const NextBtn = ({ dispatch, answer }: BtnProps) => {
  if (answer === null) return null;
  return (
    <button onClick={() => dispatch({ type: "nextQuestion" })}>Next</button>
  );
};
