import { useEffect, useState } from "react";
import { getCookie, setCookie } from "../../cookies/cookies";
import { CookieInformation } from "../CookiesInfo";
import { Logo } from "../Logo";
import { StyledHeader } from "./Styles";

export const Header = () => {
  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    const cookieInfoShown = getCookie("modalShown");
    if (cookieInfoShown) {
      setShowInfo(false);
    }
  }, []);

  const handleCloseInfo = () => {
    setShowInfo(false);
    setCookie({ name: "CookieShown", value: true, days: 30 });
  };

  return (
    <StyledHeader $show={showInfo}>
      {showInfo && (
        <CookieInformation
          showInfo={showInfo}
          handleCloseInfo={handleCloseInfo}
        />
      )}
      <Logo positionOnPage={true} />
    </StyledHeader>
  );
};
