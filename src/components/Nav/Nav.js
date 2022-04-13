import "./Nav.css";
import Logo from "../ui/Logo";

function Nav() {
  return (
    <nav className="Nav">
      <Logo />
      <ul>
        <navItem url="/" >Home</navItem>
        <navItem url="/" active>Food's</navItem>
        <navItem url="/">Drinks</navItem>
      </ul>
    </nav>
  );
}

export default Nav;