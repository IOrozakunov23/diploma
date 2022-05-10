import classes from "./Nav.css";
import NavItem from "./NavItem/NavItem";

function Nav() {
  return (
    <ul className={classes.Nav}>
      <NavItem url="/">Home</NavItem>
      <NavItem url="/products">Foods</NavItem>
      <NavItem url="/contacts">Drinks</NavItem>
    </ul>
  );
}

export default Nav;
