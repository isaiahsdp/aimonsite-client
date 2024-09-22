// Navbar.js

import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link to="/" className="home-button">
          <div className="aim-text poppins-semibold">
            <span>AIM</span>
          </div>
        </Link>
        <div className="nav-links">
          <Link to="/" className="poppins-regular">
            Home
          </Link>
          <Link to="/create-inquiry" className="poppins-regular">
            Inquiry
          </Link>
        </div>
        <div className="poppins-regular-light-nav">
          260 El Camino Real, San Carlos, CA 94070
        </div>
      </div>
    </div>
  );
};
