import { NavLink } from "react-router-dom";
import { ListNavigation, StyledNavigation } from "./Styles";

export const Navigation = () => {
  return (
    <StyledNavigation>
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
    </StyledNavigation>
  );
};
