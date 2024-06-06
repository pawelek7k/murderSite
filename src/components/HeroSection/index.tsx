import { ImArrowDown2 } from "react-icons/im";
import { Heading } from "../Heading";
import { Image } from "../Image";
import { LookUp } from "../LookUp";
import { StyledWrapperLink } from "./Styles";

export const Hero = () => {
  return (
    <>
      <StyledWrapperLink>
        <Image
          src={"../../images/conspiracy_theory_logo.png"}
          alt={"conspiracy theory logo"}
          width={200}
        />
        <LookUp link={""} content={"learn more"} />
        <ImArrowDown2 className="ArrowDown" />
      </StyledWrapperLink>
      <Heading content={"Odsłona ludzkiej natury."} />
    </>
  );
};
