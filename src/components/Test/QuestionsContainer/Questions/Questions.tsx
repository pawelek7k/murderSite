interface QuestionsProps {
  question: any;
}

export const Questions = ({ question }: QuestionsProps) => {
  console.log(question.question);
  return <h1>{question.question}</h1>;
};
