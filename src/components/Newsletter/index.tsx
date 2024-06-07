import { Button } from "../Button";
import { Heading } from "../Heading/h2";
import { Paragraph } from "../Paragraph";
import { Section } from "./Styles";

export const Newsletter = () => {
  return (
    <Section>
      <Heading content={"Newsletter"} visually={true} />
      <Paragraph
        content={
          " Lorem ipsum dolor sit amet, consectetur adipisicing elit.  temporibus consequatur laudantium, minus veritatis aliquam vero suscipit molestiae obcaecati tempore. Incidunt, numquam libero!"
        }
      />
      <Button content={"Subscribe"} />
    </Section>
  );
};
