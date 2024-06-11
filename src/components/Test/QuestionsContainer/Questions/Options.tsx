import { Dispatch } from "react";
import { Action } from "..";

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
          <button
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            className={
              hasAnswered
                ? index === answer
                  ? "activeOption"
                  : "otherOptions"
                : ""
            }
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
