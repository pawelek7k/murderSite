import { Dispatch } from "react";
import { Action } from "..";
import { Heading } from "../../../Heading/h2";
import { QuestionWrapper } from "../Styles";
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
    <QuestionWrapper>
      <Heading $visually={true}>{question.question}</Heading>
      <Length numQuestions={numQuestions} />
      <Options options={question.options} dispatch={dispatch} answer={answer} />
    </QuestionWrapper>
  );
};
