import { useEffect, useReducer } from "react";
import { ErrorComp } from "../../Error";
import { Heading } from "../../Heading/h2";
import { Loader } from "../../Loader";
import { Buttons } from "./Questions/Buttons";
import { Length } from "./Questions/Length";
import { NextBtn } from "./Questions/NextBtn";
import { Questions } from "./Questions/Questions";
import { QuestionsContStyles } from "./Styles";

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
  answer: number | null;
  points: number;
  // highscore: number;
};

export type Action =
  | { type: "dataReceived"; payload: Question[] }
  | { type: "dataFailed" }
  | { type: "start" }
  | { type: "newAnswer"; payload: number }
  | { type: "nextQuestion" };

const initialState: State = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
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
    case "newAnswer":
      // eslint-disable-next-line no-case-declarations
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    default:
      throw new Error("Action unknown");
  }
}

export const TestContainer = () => {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
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
    <QuestionsContStyles id="testContainer">
      <Heading content={"Are you ready?"} visually={true} />
      {status === "loading" && <Loader />}
      {status === "error" && <ErrorComp />}
      {status === "ready" && <Buttons dispatch={dispatch} />}
      {status === "active" && (
        <>
          <Length numQuestions={numQuestions} />
          <Questions
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
          <NextBtn dispatch={dispatch} answer={answer} />
        </>
      )}
    </QuestionsContStyles>
  );
};
