import  "./Logo.css";
import logo from "../../../assets/image 1.jpg";
const Logo = () => {
  return (
    <div className="Logo">
      <div>
      <img
        alt="Logo of the Pizza project"
        src={logo}
      />
      </div>
      <div className="Text">
        <h1>Pizza</h1>
      </div>
    </div>
  );
};

export default Logo;

