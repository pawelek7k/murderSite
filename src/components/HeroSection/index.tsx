import { ImArrowDown2 } from "react-icons/im";
import AngelLeft from "../../images/angelLeft.png";
import AngelRight from "../../images/angelRight.png";
import LogoIlluminati from "../../images/conspiracy_theory_logo.png";
import { Heading } from "../Heading";
import { Image } from "../Image";
import { LookUp } from "../LookUp";
import { StyledWrapperLink, StyledWrapperLogos } from "./Styles";

export const Hero = () => {
  return (
    <>
      <StyledWrapperLogos>
        <Image src={AngelLeft} alt={"ok"} width={200} />

        <StyledWrapperLink>
          <Image
            src={LogoIlluminati}
            alt={"conspiracy theory logo"}
            width={100}
          />
          <LookUp link={""} content={"learn more"} />
          <ImArrowDown2 className="ArrowDown" />
        </StyledWrapperLink>
        <Image src={AngelRight} alt={"ok"} width={200} />
      </StyledWrapperLogos>
      <Heading content={"Odsłona ludzkiej natury."} />
    </>
  );
};
