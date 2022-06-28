import { NavLink,useMatch } from "react-router-dom";
import classes from "./NavItem.module.css";

function NavItem(props) {
  return ( 
  <li className={classes.NavItem}>
    <NavLink to={props.url}
      className={useMatch(props.url) ? classes.active : null}
    >
      {props.children}
    </NavLink>
    </li>
  );
}

export default NavItem;
