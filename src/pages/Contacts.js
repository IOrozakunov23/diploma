import Header from "../components/Header/Header";
import headerImage from "../assets/contact.webp";

function Contacts() {
  return (
    <>
      <Header
        title="About"
        image={headerImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores explicabo, quas laudantium accusamus consequuntur ipsa, eius cumque dolorem doloribus eos dolore in illo mollitia repellat modi nam nihil aliquam qui!
        <hr></hr>
        Phone:+996 123 456 678
      </Header>
    </>
  );
}

export default Contacts;