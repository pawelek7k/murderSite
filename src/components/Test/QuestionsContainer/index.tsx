import { useEffect, useReducer } from "react";
import { Heading } from "../../Heading/h2";

const initialState = {
  questions: [],
  status: "loading",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    default:
      throw new Error("Action unkonwn");
  }
};

export const TestContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((e) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <section>
      <Heading content={"Are you ready?"} visually={true} />
    </section>
  );
};
