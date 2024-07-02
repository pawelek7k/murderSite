import { Heading } from "../../Heading/h1";
import { InputComponent } from "../Input";
import { HeroStyles } from "./HeroStyles";

export const Hero = () => {
  return (
    <HeroStyles>
      <InputComponent />
      <Heading content={"Iceberg serial killers"} />
    </HeroStyles>
  );
};
