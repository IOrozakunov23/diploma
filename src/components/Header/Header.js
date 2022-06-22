import "./Header.css";
// import headerImage from "../../assets/header2.jpg";

function Header({image,  title, children }) {
  return (
    <header className="Header">
      <section>
        <h1>{title}</h1>
        <p>{children}</p>
      </section>
      <img src={image} alt="title" />
    </header>
  );
}

export default Header;