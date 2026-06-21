
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../cartContext/cartcontext";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="logo">
          Auth<span>Flow</span>
        </Link>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>

          

          {/* Fixed: div ko li bana diya, ul ke andar div invalid hota hai */}
          <li className="nav-buttons">
            

            <Link to="/login" className="login-btn">
              Log In
            </Link>

            <Link to="/sign-up" className="signup-btn">
              Sign Up
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;