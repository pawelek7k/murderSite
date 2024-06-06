import { Heading } from "../Heading";
import { LookUp } from "../LookUp";
import { StyledWrapperLink } from "./Styles";

export const Hero = () => {
  return (
    <>
      <StyledWrapperLink>
        <LookUp link={""} content={"learn more"} />
      </StyledWrapperLink>
      <Heading content={"Odsłona ludzkiej natury."} />
    </>
  );
};
