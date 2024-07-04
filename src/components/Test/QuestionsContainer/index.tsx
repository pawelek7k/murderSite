import { useEffect, useReducer } from "react";
import { ErrorComp } from "../../Error";
import { Heading } from "../../Heading/h2";
import { Loader } from "../../Loader";
import { Buttons } from "./Questions/Buttons";
import { NextBtn } from "./Questions/NextBtn";
import { Questions } from "./Questions/Questions";
import { Result } from "./Questions/Result";
import { QuestionsContStyles } from "./Styles";

type Question = {
  question: string;
  options: string[];
  points: number[];
};

type State = {
  questions: Question[];
  status: "loading" | "ready" | "error" | "active" | "finished";
  index: number;
  answer: number | null;
  points: number;
  previousAnswer: number | null;
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
  previousAnswer: null,
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
      // eslint-disable-next-line no-case-declarations
      const newPoints =
        state.previousAnswer !== null
          ? state.points -
            question.points[state.previousAnswer] +
            question.points[action.payload]
          : state.points + question.points[action.payload];
      return {
        ...state,
        answer: action.payload,
        points: newPoints,
        previousAnswer: action.payload,
      };
    case "nextQuestion":
      // eslint-disable-next-line no-case-declarations
      const isLastQuestion = state.index === state.questions.length - 1;
      return isLastQuestion
        ? { ...state, status: "finished" }
        : {
            ...state,
            index: state.index + 1,
            answer: null,
            previousAnswer: null,
          };
    default:
      throw new Error("Action unknown");
  }
}

export const TestContainer = () => {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3030/personality-quiz");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data = result.data.map((item: any) => ({
          question: item.question,
          options: Object.keys(item.answers),
          points: Object.values(item.answers),
        }));

        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        dispatch({ type: "dataFailed" });
      }
    };

    fetchData();
  }, []);

  return (
    <QuestionsContStyles id="testContainer">
      {status === "active" ? (
        <>
          <Questions
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
            numQuestions={numQuestions}
          />
          <NextBtn dispatch={dispatch} answer={answer} />
        </>
      ) : status === "finished" ? (
        <Result points={points} />
      ) : (
        <Heading $visually={true}>Are you ready?</Heading>
      )}
      {status === "loading" && <Loader />}
      {status === "error" && <ErrorComp />}
      {status === "ready" && <Buttons dispatch={dispatch} />}
    </QuestionsContStyles>
  );
};
