import { Heading } from "../../Heading/h1";
import { Paragraph } from "../../Paragraph";
import { ArticlesCard } from "../ArticlesCard";
import { HeroStyles } from "./HeroStyles";

export const Hero = () => {
  return (
    <HeroStyles>
      <Heading content={"Iceberg serial killers"} />
      <Paragraph
        content={" Lorem ipsum dolor sit amet, consectetur adipisicing elit. "}
      />
      <ArticlesCard />
    </HeroStyles>
  );
};
