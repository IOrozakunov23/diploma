import "./Header.css";
// import headerImage from "../../assets/food.jpg";

function Header({ image, title, children }) {
  return (
    <header className="Header">
      <img src={image} alt="title" />
      <section>
        <h1>{title}</h1>
        <p>{children}</p>
      </section>
    </header>
  );
}
{
  /* <h1>Kyrgyz dishes</h1>
      <p>This is an internet shop</p> */
}
export default Header;
