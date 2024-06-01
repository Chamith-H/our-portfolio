import "./Header.css";
import logo from "../../assets/logo/brand.png";

const Header = () => {
  return (
    <div className="Header px-5 sticky-top">
      <div className="Company-Brand">
        <img src={logo} alt="" />
      </div>
      <div className="Navigations">
        <a className="me-4" href="">
          Home
        </a>
        <a className="me-4" href="">
          Services
        </a>
        <a className="me-4" href="">
          Benifits
        </a>

        <a href="">About Us</a>
      </div>
    </div>
  );
};

export default Header;
