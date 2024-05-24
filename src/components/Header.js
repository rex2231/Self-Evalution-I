import { BsList } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import "./styles.css";

const Header = () => (
  <div className="header-bg">
    <div className="site-header-container">
      <BsList className="site-icon" />
      <h1 className="site-heading">learning.com</h1>
    </div>
    <ul className="header-sub-headings">
      <li>Become ACCA</li>
      <li>What Will you Learn</li>
      <li>Why Choose Us</li>
      <li>Plans & Pricing</li>
    </ul>
    <button className="login-signup-button">
      <CgProfile className="login-signup-icon" />
      <h1>LogIn/SignUp</h1>
    </button>
  </div>
);

export default Header;
