import { motion } from "framer-motion";
import { ImArrowDown2 } from "react-icons/im";
import AngelLeft from "../../images/angelLeft.png";
import AngelRight from "../../images/angelRight.png";
import LogoIlluminati from "../../images/conspiracy_theory_logo.png";
import { Heading } from "../Heading";
import { Image } from "../Image";
import { LookUp } from "../LookUp";
import { Paragraph } from "../Paragraph";
import {
  HeadingWrapper,
  ImageContainer,
  Section,
  StyledWrapperLink,
  StyledWrapperLogos,
} from "./Styles";

export const Hero = () => {
  return (
    <>
      <Section>
        <ImageContainer>
          <motion.div
            className="p-6 bg-white rounded-md shadow-md"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
          >
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
          </motion.div>

          <HeadingWrapper>
            <Paragraph
              content={
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis voluptatem aliquam excepturi possimus dolorum itaque amet, "
              }
            />
            <Heading content={"A revelation of human nature."} />
          </HeadingWrapper>
        </ImageContainer>
      </Section>
    </>
  );
};
