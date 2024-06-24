import { useState } from "react";
import { setCookie } from "../../cookies/cookies";
import { CookieInformation } from "../CookiesInfo";
import { Logo } from "../Logo";
import { StyledHeader } from "./Styles";

export const Header = () => {
  const [showInfo, setShowInfo] = useState(true);

  const handleCloseInfo = () => {
    setShowInfo(false);
    setCookie({ name: "modalShown", value: true, days: 30 });
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
