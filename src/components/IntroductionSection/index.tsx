import { Heading } from "../Heading/h2";
import { List } from "../List";
import { StyledIntroduction } from "./Styles";

export const Introduction = () => {
  return (
    <>
      <StyledIntroduction>
        <Heading content={"Come closer."} visually={true}></Heading>
        <List />
      </StyledIntroduction>
    </>
  );
};
