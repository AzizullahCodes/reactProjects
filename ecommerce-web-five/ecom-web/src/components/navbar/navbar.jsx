
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../cartContext/cartcontext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();
  //logout handling functionality
  const navigate = useNavigate();
  const LogoutFunction = ()=>{
    localStorage.removeItem('loggedInUser');
     Swal.fire({
      title: "you have been logged out!",
      icon: "success",
      draggable: true
    })
    navigate('/login')
  }

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="logo">
          Shop<span>Now</span>
        </Link>
         <div className="search-group">
    <select className="search-dropdown">
      <option value="all">All</option>
      <option value="category1">Category 1</option>
      <option value="category2">Category 2</option>
    </select>

    <input 
      type="text" 
      placeholder="Search..." 
      className="search-input"
    />

    <button className="search-btn">Search</button>
  </div>
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
          
          <li>
            <button onClick={LogoutFunction}>logout</button>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;