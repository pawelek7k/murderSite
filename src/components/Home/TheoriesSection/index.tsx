import LogoIlluminati from "../../../images/conspiracy_theory_logo.png";
import HT from "../../../images/HTIcon.jpg";
import SBS from "../../../images/SBSIcon.jpg";
import { TimeComponent } from "../../Date";
import { Heading } from "../../Heading/h2";
import { Image } from "../../Image";
import { Link } from "../../Link";
import {
  ContentContainer,
  Headings,
  HeadingWrapper,
  Icon,
  Item,
  LinksContainer,
  LinkWrapper,
  List,
  Section,
  TextContainer,
} from "./Styles";

export const TheoriesSection = () => {
  return (
    <Section id="TheoriesSection">
      <HeadingWrapper>
        <Image
          src={LogoIlluminati}
          alt={"conspiracy theory logo"}
          width={100}
          res={true}
        />
        <TimeComponent res={true} />

        <Heading $visually={true}>Conspiracy theories</Heading>
        <TimeComponent res={true} />
        <Image
          src={LogoIlluminati}
          alt={"conspiracy theory logo"}
          width={100}
          res={true}
        />
      </HeadingWrapper>

      <ContentContainer>
        <TextContainer>
          <Headings>Trailer</Headings>
          <p>
            Is there more to reality than meets the eye? Are hidden forces
            guiding our destinies from the shadows? In the world of conspiracy
            theories, nothing is as it seems. In this section, we delve into the
            unknown, uncover intriguing stories, and explore hidden narratives
            that have fascinated and sparked controversy for years. Prepare
            yourself for a journey into undiscovered truths, where every sign
            and symbol may conceal dark secrets of powerful organizations, and
            the line between reality and illusion is as thin as a spider’s web.
          </p>
        </TextContainer>
        <LinksContainer>
          <Headings>YouTube</Headings>
          <List>
            <Item>
              <Icon src={SBS} alt="" />
              <LinkWrapper>
                <Link
                  href={"https://www.youtube.com/@sekielskibrothersstudio"}
                  content={"SEKIELSKI BROTHERS STUDIO"}
                ></Link>
              </LinkWrapper>
            </Item>
            <Item>
              <Icon src={HT} alt="" />
              <LinkWrapper>
                <Link
                  href={"https://www.youtube.com/@HardcoreTeaching"}
                  content={"Hardcore Teaching"}
                ></Link>
              </LinkWrapper>
            </Item>
          </List>
        </LinksContainer>
      </ContentContainer>
    </Section>
  );
};
