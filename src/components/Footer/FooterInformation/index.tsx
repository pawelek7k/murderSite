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

const socialLinks = [
  {
    href: "https://github.com/pawelek7k/murderSite",
    icon: <ImGithub />,
  },
  {
    href: "https://www.facebook.com/",
    icon: <ImFacebook2 />,
  },
  {
    href: "https://www.youtube.com/",
    icon: <ImYoutube />,
  },
  {
    href: "https://open.spotify.com/",
    icon: <BsSpotify />,
  },
];

export const FooterInformation = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo positionOnPage={false} />
        <Paragraph>
          a laudantium rem saepe eius, qui aspernatur deserunt maiores
          perferendis, laboriosam culpa reiciendis.
        </Paragraph>
      </LogoWrapper>
      <SocialWrapper>
        <HeadingH3>Our Social Media</HeadingH3>
        <IconWrapper>
          {socialLinks.map((social, index) => (
            <Link key={index} href={social.href} content={social.icon} />
          ))}
        </IconWrapper>
      </SocialWrapper>
      <CopyRightWrapper>
        <Paragraph>CopyRight©2024 - Klaudia Pawełek</Paragraph>
      </CopyRightWrapper>
    </Wrapper>
  );
};
