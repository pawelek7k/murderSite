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
      <ul>
        {question.options.map((o, index: number) => (
          <li key={index}>
            <button>{o}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
