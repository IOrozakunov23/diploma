import Logo from "../ui/Logo/Logo";
import "./Nav.css";

import NavItem from "./NavItem/NavItem";

function Nav() {
  return (
    <nav className="Nav">
      <div className="container">
        <Logo />
        <ul>
          <NavItem url="/">Home</NavItem>
          <NavItem url="/Foods">Foods</NavItem>
          <NavItem url="/Drinks">Drinks</NavItem>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
