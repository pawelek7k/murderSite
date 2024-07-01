import { Dispatch } from "react";
import { Action } from "..";
import { AnswerBtn } from "../Styles";

interface OptionsProps {
  options: string[];
  dispatch: Dispatch<Action>;
  answer: number | null;
}

export const Options = ({ options, dispatch, answer }: OptionsProps) => {
  const hasAnswered = answer !== null;

  return (
    <ul>
      {options.map((option, index) => (
        <li key={option}>
          <AnswerBtn
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            className={
              hasAnswered
                ? index === answer
                  ? "activeOption"
                  : "otherOptions"
                : ""
            }
          >
            <p>{option}</p>
          </AnswerBtn>
        </li>
      ))}
    </ul>
  );
};
