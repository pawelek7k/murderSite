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
  Section,
  StyledWrapperLink,
  StyledWrapperLogos,
} from "./Styles";

export const Hero = () => {
  return (
    <>
      <Section>
        <StyledWrapperLogos>
          <motion.div
            className="p-6 bg-white rounded-md shadow-md"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Image src={AngelLeft} alt={"ok"} width={200} />
          </motion.div>
          <StyledWrapperLink>
            <motion.div
              className="p-6 bg-white rounded-md shadow-md"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Image
                src={LogoIlluminati}
                alt={"conspiracy theory logo"}
                width={100}
              />
            </motion.div>
            <LookUp link={""} content={"learn more"} />
            <ImArrowDown2 className="ArrowDown" />
          </StyledWrapperLink>
          <motion.div
            className="p-6 bg-white rounded-md shadow-md"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Image src={AngelRight} alt={"ok"} width={200} />
          </motion.div>
        </StyledWrapperLogos>
        <HeadingWrapper>
          <Paragraph
            content={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis voluptatem aliquam excepturi possimus dolorum itaque amet, "
            }
          />
          <Heading content={"Odsłona ludzkiej natury."} />
        </HeadingWrapper>
      </Section>
    </>
  );
};
