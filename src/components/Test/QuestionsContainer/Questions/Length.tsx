interface LengthProps {
  numQuestions: number;
}

export const Length = ({ numQuestions }: LengthProps) => {
  return (
    <>
      <h6>{numQuestions}</h6>{" "}
    </>
  );
};
