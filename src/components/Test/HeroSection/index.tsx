import { motion } from "framer-motion";
import AngelLeft from "../../../images/angelLeft.png";
import AngelRight from "../../../images/angelRight.png";
import { Button } from "../../Button";
import { Heading } from "../../Heading/h1";
import {
  HeadingWrapper,
  StyledWrapperLogos,
} from "../../Home/HeroSection/Styles";
import { Image } from "../../Image";
import { Paragraph } from "../../Paragraph";
import { Section } from "./Styles";

export const Hero = () => {
  return (
    <Section>
      <motion.div
        className="p-6 bg-white rounded-md shadow-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <StyledWrapperLogos $res={false}>
          <Image src={AngelLeft} alt={"ok"} width={200} res={true} />

          <Image src={AngelRight} alt={"ok"} width={200} res={true} />
        </StyledWrapperLogos>
      </motion.div>
      <HeadingWrapper>
        <Paragraph
          content={
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
          }
        />
        <Heading content={"Get to know yourself."} />
        <Button content="Start" />
      </HeadingWrapper>
    </Section>
  );
};
