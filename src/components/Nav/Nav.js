import "./Nav.css";
import Logo from "../ui/Logo";

function Nav() {
  return (
    <nav className="Nav">
      <Logo />
      <ul>
        <navItem url="/" >Home</navItem>
        <navItem url="/Foods">Foods</navItem>
        <navItem url="/Drinks">Drinks</navItem>
      </ul>
    </nav>
  );
}

export default Nav;