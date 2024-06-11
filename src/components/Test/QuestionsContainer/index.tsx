import { useEffect, useReducer } from "react";
import { ErrorComp } from "../../Error";
import { Heading } from "../../Heading/h2";
import { Loader } from "../../Loader";
import { QuestionsContainer } from "./Questions";
import { Length } from "./Questions/Length";
import { Questions } from "./Questions/Questions";

type Question = {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
};

type State = {
  questions: Question[];
  status: "loading" | "ready" | "error" | "active";
  index: number;
  // answer: number;
  // points: number;
  // highscore: number;
};

export type Action =
  | { type: "dataReceived"; payload: Question[] }
  | { type: "dataFailed" }
  | { type: "start" };

const initialState: State = {
  questions: [],
  status: "loading",
  index: 0,
  // answer: 0,
  // points: 0,
  // highscore: 0,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    default:
      throw new Error("Action unknown");
  }
}

export const TestContainer = () => {
  const [{ questions, status, index }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;

  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <section>
      <Heading content={"Are you ready?"} visually={true} />

      {status === "loading" && <Loader />}
      {status === "error" && <ErrorComp />}
      {status === "ready" && <QuestionsContainer dispatch={dispatch} />}
      {status === "active" && (
        <>
          <Length numQuestions={numQuestions} />
          <Questions question={questions[index]} />
        </>
      )}
    </section>
  );
};
