import { useEffect, useState } from "react";
import { ImArrowUp2 } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { Container, ListNavigation, StyledNavigation } from "./Styles";

export const Navigation = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <StyledNavigation>
      <Container>
        {showScroll && <ImArrowUp2 className="ArrowDown" onClick={scrollTop} />}
      </Container>
      <nav>
        <ListNavigation>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Test">Test</NavLink>
          </li>
          <li>
            <NavLink to="/Iceberg">Iceberg</NavLink>
          </li>
        </ListNavigation>
      </nav>
      <Container>
        {showScroll && <ImArrowUp2 className="ArrowDown" onClick={scrollTop} />}
      </Container>
    </StyledNavigation>
  );
};
