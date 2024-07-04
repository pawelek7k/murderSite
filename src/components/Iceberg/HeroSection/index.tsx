import { Heading } from "../../Heading/h1";
import { ArticlesCard } from "../ArticlesCard";
import { HeroStyles } from "./HeroStyles";

export const Hero = () => {
  return (
    <HeroStyles>
      <Heading content={"Iceberg serial killers"} />
      <ArticlesCard />
    </HeroStyles>
  );
};
