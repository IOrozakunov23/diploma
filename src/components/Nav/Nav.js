import "./Nav.css";
import Logo from "../ui/Logo";

function Nav() {
  return (
    <nav className="Nav">
      <Logo />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Food's</a>
        </li>
        <li>
          <a href="/">Drink's</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
