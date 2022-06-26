import classes from "./Nav.css";
import NavItem from "./NavItem/NavItem";

function Nav() {
  return (
    <ul className={classes.Nav}>
      <NavItem url="/">Home</NavItem>
      <NavItem url="/products">All products</NavItem>
      <NavItem url="/categories">Drink's</NavItem>
      <NavItem url="/">About</NavItem>
      <NavItem url="/Cart">Cart</NavItem>

    </ul>
  );
}

export default Nav;
