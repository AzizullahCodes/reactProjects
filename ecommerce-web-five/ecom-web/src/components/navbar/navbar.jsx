import React, { useState, useContext } from "react";
import { Link,useNavigate} from "react-router-dom";
import SearchContext from "../../context/searchContext/searchContext";
import cartContext from "../../context/cartContext/cartContext";
import Swal from "sweetalert2";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState('');
  const {cart} = useContext(cartContext)
  // console.log(cart)
  // const { cartCount } = useCart(); // Un-comment this when your context is ready
  const cartCount = 3; // Temporary placeholder for design preview
  const navigate = useNavigate();

  const handleSearch = () => {
    if (inputValue.trim() === '') {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter required data you want to search like mobile, keyboard etc!",
      });
    } else {
      setSearchTerm(inputValue);
    }
    setInputValue('');
  };

  const LogoutFunction = () => {
    localStorage.removeItem('loggedInUser');
    Swal.fire({
      title: "You have been logged out!",
      icon: "success",
      draggable: true
    });
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* LEFT: Logo */}
        <div className="nav-left">
          <Link to="/" className="logo">
            Shop<span>Now</span>
          </Link>
        </div>

        {/* CENTER: Search Bar (Daraz Style) */}
        <div className="nav-center">
          <div className="search-group">
            <select className="search-dropdown">
              <option value="all">All</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </select>
            <input
              type="text"
              placeholder="Search in ShopNow..."
              className="search-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button className="search-btn" onClick={handleSearch}>
              <span className="search-icon-desktop">🔍</span>
            </button>
          </div>
        </div>

        {/* RIGHT: Desktop Navigation Links */}
        <div className="nav-right">
          <Link to="/" className="nav-item-link">Home</Link>
          
          <Link to="/cartpage" className="cart-link">
            <div className="cart-icon-wrapper">
              <span className="cart-icon">🛒</span>
              {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
            </div>
          </Link>

          <button className="logout-btn" onClick={LogoutFunction}>
            Logout
          </button>

          {/* Hamburger Menu Icon for Mobile */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      </div>

      {/* MOBILE DROPDOWN DRAWER */}
      <div className={`mobile-nav-links ${menuOpen ? "show" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/cart" onClick={() => setMenuOpen(false)}>
          Cart {cartCount > 0 && `(${cartCount})`}
        </Link>
        <button onClick={() => { LogoutFunction(); setMenuOpen(false); }} className="mobile-logout">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;