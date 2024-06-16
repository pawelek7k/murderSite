import { Dispatch } from "react";
import { Action } from "..";
import { Heading } from "../../../Heading/h2";
import { Length } from "./Length";
import { Options } from "./Options";

interface Question {
  question: string;
  options: string[];
}

interface QuestionsProps {
  question: Question;
  dispatch: Dispatch<Action>;
  answer: number | null;
  numQuestions: number;
}

export const Questions = ({
  question,
  dispatch,
  answer,
  numQuestions,
}: QuestionsProps) => {
  return (
    <div>
      <Heading content={question.question} visually={true} />
      <Length numQuestions={numQuestions} />
      <Options options={question.options} dispatch={dispatch} answer={answer} />
    </div>
  );
};
