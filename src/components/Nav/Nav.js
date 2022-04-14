import Logo from "../ui/Logo/Logo";
import "./Nav.css";

import NavItem from "./NavItem/NavItem";

function Nav() {
  return (
    <nav className="Nav">
      <Logo/>
      <ul>
        <NavItem url="/" >Home</NavItem>
        <NavItem url="/Foods">Foods</NavItem>
        <NavItem url="/Drinks">Drinks</NavItem>
      </ul>
    </nav>
  );
}

export default Nav;