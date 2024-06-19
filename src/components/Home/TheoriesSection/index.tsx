import LogoIlluminati from "../../../images/conspiracy_theory_logo.png";
import { Heading } from "../../Heading/h2";
import { Image } from "../../Image";
import { HeadingWrapper, Section } from "./Styles";

export const TheoriesSection = () => {
  return (
    <Section>
      <HeadingWrapper>
        <Image
          src={LogoIlluminati}
          alt={"conspiracy theory logo"}
          width={100}
          res={false}
        />
        <Heading content={"Conspiracy theories"} visually={true} />
        <Image
          src={LogoIlluminati}
          alt={"conspiracy theory logo"}
          width={100}
          res={false}
        />
      </HeadingWrapper>
    </Section>
  );
};
