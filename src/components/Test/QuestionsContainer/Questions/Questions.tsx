import { Dispatch } from "react";
import { Action } from "..";
import { Heading } from "../Styles";
import { Options } from "./Options";

interface Question {
  question: string;
  options: string[];
}

interface QuestionsProps {
  question: Question;
  dispatch: Dispatch<Action>;
  answer: number | null;
}

export const Questions = ({ question, dispatch, answer }: QuestionsProps) => {
  return (
    <div>
      <Heading>{question.question}</Heading>

      <Options options={question.options} dispatch={dispatch} answer={answer} />
    </div>
  );
};
