import { Heading } from "../../Heading/h1";
import { Paragraph } from "../../Paragraph";
import { ArticlesCard } from "../ArticlesCard";
import { HeroStyles } from "./HeroStyles";

export const Hero = () => {
  return (
    <HeroStyles>
      <Heading content={"Iceberg serial killers"} />
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Paragraph>
      <ArticlesCard />
    </HeroStyles>
  );
};
