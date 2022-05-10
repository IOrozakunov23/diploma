import classes from "./Nav.css";
import NavItem from "./NavItem/NavItem";

function Nav() {
  return (
    <ul className={classes.Nav}>
      <NavItem url="/">Home</NavItem>
      <NavItem url="/foods">Foods</NavItem>
      <NavItem url="/drinks">Drinks</NavItem>
    </ul>
  );
}

export default Nav;
