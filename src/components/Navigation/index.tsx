import { NavLink } from "react-router-dom";
import { ListNavigation, StyledNavigation } from "./Styles";
import { RiKnifeBloodFill } from "react-icons/ri";

export const Navigation = () => {
  return (
    <StyledNavigation>
      <RiKnifeBloodFill />
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
      <RiKnifeBloodFill />
    </StyledNavigation>
  );
};
