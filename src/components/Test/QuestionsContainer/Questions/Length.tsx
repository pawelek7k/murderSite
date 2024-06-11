import { Dispatch } from "react";
import { Action } from "..";
import { Button } from "../../../Button";

interface LengthProps {
  numQuestions: number;
  dispatch: Dispatch<Action>;
}

export const Length = ({ numQuestions, dispatch }: LengthProps) => {
  return (
    <>
      <h6>{numQuestions}</h6>{" "}
      <Button content="Start" onClick={() => dispatch({ type: "start" })} />
    </>
  );
};
