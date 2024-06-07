import AngelLeft from "../../images/angelLeft.png";
import AngelRight from "../../images/angelRight.png";
import { Heading } from "../Heading/h2";
import { Image } from "../Image";
import { List } from "../List";
import { StyledIntroduction, Wrapper } from "./Styles";

export const Introduction = () => {
  return (
    <>
      <StyledIntroduction>
        <Wrapper>
          <Image src={AngelLeft} alt={"ok"} width={200} res={false} />

          <Heading content={"Come closer."} visually={true} />
          <Image src={AngelRight} alt={"ok"} width={200} res={false} />
        </Wrapper>
        <List />
      </StyledIntroduction>
    </>
  );
};
