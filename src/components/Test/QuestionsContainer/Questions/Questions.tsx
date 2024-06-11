import { Options } from "./Options";

interface Question {
  question: string;
  options: string[];
}

interface QuestionsProps {
  question: Question;
}

export const Questions = ({ question }: QuestionsProps) => {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options options={question.options} />
    </div>
  );
};
