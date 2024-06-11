import { Dispatch } from "react";
import { Action } from "..";
import { Button } from "../../../Button";

interface QuestionsProps {
  dispatch: Dispatch<Action>;
}

export const QuestionsContainer = ({ dispatch }: QuestionsProps) => {
  return <Button content="start" onClick={() => dispatch({ type: "start" })} />;
};
