import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="aim-text-footer">AIM</div>
      <div className="contact-text">
        <div>(650)862-5588</div>
        <div>customerservice@aimonsite.com</div>
      </div>
      <div className="rectangle"></div>
      <div className="nav-links-footer">
        <Link to="/" className="poppins-regular">
          Home
        </Link>
        <Link to="/create-inquiry" className="poppins-regular">
          Quote
        </Link>
        <a
          href="mailto:customerservice@aimonsite.com"
          className="poppins-regular"
        >
          Contact
        </a>
      </div>
      <div className="copyright-text">©2024 Aim Blind and Drapery</div>
    </div>
  );
};

export default Footer;
