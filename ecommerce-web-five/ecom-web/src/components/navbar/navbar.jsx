
// import React, { useState ,useContext } from "react";
// import { Link } from "react-router-dom";
// import SearchContext from "../../context/searchContext/searchContext";
// // import { useCart } from "../cartContext/cartcontext";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import "./navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const {searchTerm,setSearchTerm} = useContext(SearchContext)
//   const [inputValue,setInputValue] = useState('')
//   //handle search 
//   const handleSearch = ()=>{
//     if(inputValue == ''){
//       Swal.fire({
//   icon: "error",
//   title: "Oops...",
//   text: "Enter required data you want to search like mobile,keyboard etc!",

// });
//     }
//     else{
//       setSearchTerm(inputValue)
//     }
//     setInputValue('')
//   }
//   const navigate = useNavigate();
//   const LogoutFunction = ()=>{
//     localStorage.removeItem('loggedInUser');
//      Swal.fire({
//       title: "you have been logged out!",
//       icon: "success",
//       draggable: true
//     })
//     navigate('/login')
//   }

//   return (
//     <nav className="navbar">
//       <div className="nav-container">

//         {/* Logo */}
//         <Link to="/" className="logo">
//           Shop<span>Now</span>
//         </Link>
//          <div className="search-group">
//     <select className="search-dropdown">
//       <option value="all">All</option>
//       <option value="category1">Category 1</option>
//       <option value="category2">Category 2</option>
//     </select>

//     <input 
//       type="text" 
//       placeholder="Search..." 
//       className="search-input"
//       value={inputValue}
//       onChange={(e)=>setInputValue(e.target.value)}
//     />

//     <button className="search-btn" onClick={handleSearch}>Search</button>
//   </div>
//         {/* Hamburger */}
//         <div
//           className={`hamburger ${menuOpen ? "active" : ""}`}
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>

//         {/* Nav Links */}
//         <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
          
//           <li>
//             <button onClick={LogoutFunction}>logout</button>
//           </li>
//         </ul>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchContext from "../../context/searchContext/searchContext";
// import { useCart } from "../cartContext/cartcontext";
import Swal from "sweetalert2";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState('');
  // const { cartCount } = useCart();
  const navigate = useNavigate();

  // handle search
  const handleSearch = () => {
    if (inputValue == '') {
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
      title: "you have been logged out!",
      icon: "success",
      draggable: true
    });
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="logo">
          Shop<span>Now</span>
        </Link>

        {/* Search */}
        <div className="search-group">
          <select className="search-dropdown">
            <option value="all">All</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
          </select>

          <input
            type="text"
            placeholder="Search products, brands..."
            className="search-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />

          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>

        {/* Right side: Cart + Hamburger */}
        <div className="navbar-right">

          {/* Cart */}
          <Link to="/cart" className="cart-link">
            <span className="cart-icon">🛒</span>
            {/* {cartCount > 0 && <span className="cart-badge"> */}
              {/* {cartCount} */}
              {/* </span>} */}
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
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <button onClick={LogoutFunction}>Logout</button>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;