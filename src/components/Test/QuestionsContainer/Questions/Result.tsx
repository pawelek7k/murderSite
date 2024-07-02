import { Heading } from "../../../Heading/h2";
import { CategoryText } from "../Styles";

interface ResultProps {
  points: number;
}

export const Result = ({ points }: ResultProps) => {
  let category = "";
  let description = "";
  let isHighRisk = false;

  switch (true) {
    case points < 50:
      category = "Person with healthy personality";
      description =
        "Your results indicate a healthy personality with no significant psychopathic tendencies.";
      break;
    case points >= 50 && points <= 100:
      category = "Person with moderate psychopathic tendencies";
      description =
        "Your results indicate some traits that may be associated with psychopathy. Further observation and possible consultation with a psychologist are recommended.";
      break;
    case points > 100 && points <= 200:
      category = "Person with high psychopathic tendencies";
      description =
        "Your results indicate a high level of traits associated with psychopathy. It is recommended to consult with a psychologist or psychiatrist for a more thorough evaluation.";
      isHighRisk = true;
      break;
    default:
      category = "Error";
      description =
        "The score exceeds the expected range. Please check the answers.";
  }

  return (
    <div>
      <Heading content={"Test Complete!"} visually={true} />
      <ul>
        <CategoryText isHighRisk={isHighRisk}>{category}</CategoryText>
        <li>{description}</li>
      </ul>
    </div>
  );
};
