import { BsSpotify } from "react-icons/bs";
import { ImFacebook2, ImGithub, ImYoutube } from "react-icons/im";
import { HeadingH3 } from "../../Heading/h3";
import { Link } from "../../Link";
import { Logo } from "../../Logo";
import { Paragraph } from "../../Paragraph";
import {
  CopyRightWrapper,
  IconWrapper,
  LogoWrapper,
  SocialWrapper,
  Wrapper,
} from "./Styles";

export const FooterInformation = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo positionOnPage={false} />
        <Paragraph
          content={
            "a laudantium rem saepe eius, qui aspernatur deserunt maiores perferendis, laboriosam culpa reiciendis."
          }
        />
      </LogoWrapper>
      <SocialWrapper>
        <HeadingH3>Our Social Media</HeadingH3>
        <IconWrapper>
          <Link
            href={"https://github.com/pawelek7k/murderSite"}
            content={<ImGithub />}
          />
          <Link href={"https://www.facebook.com/"} content={<ImFacebook2 />} />
          <Link href={"https://www.youtube.com/"} content={<ImYoutube />} />
          <Link href={"https://open.spotify.com/"} content={<BsSpotify />} />
        </IconWrapper>
      </SocialWrapper>
      <CopyRightWrapper>
        <Paragraph content={"CopyRight©2024 - Klaudia Pawełek"} />
      </CopyRightWrapper>
    </Wrapper>
  );
};
