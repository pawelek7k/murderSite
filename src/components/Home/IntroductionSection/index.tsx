import AngelLeft from "../../../images/angelLeft.png";
import AngelRight from "../../../images/angelRight.png";
import { Heading } from "../../Heading/h2";
import { Image } from "../../Image";
import { List } from "../../List";
import { StyledIntroduction, Wrapper } from "./Styles";

export const Introduction = () => {
  return (
    <>
      <StyledIntroduction>
        <Wrapper>
          <Image
            src={AngelLeft}
            alt={"Angel with gun."}
            width={200}
            res={true}
          />

          <Heading $visually={true}>Come closer</Heading>
          <Image
            src={AngelRight}
            alt={"Angel with gun."}
            width={200}
            res={true}
          />
        </Wrapper>
        <List />
      </StyledIntroduction>
    </>
  );
};
