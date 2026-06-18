import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

import "./Navbar.css";

function Navbar() {
  const { isLogin, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
//   special 
const cartCount = cart.reduce(
  (total, item) =>
    total + item.quantity,
  0
);

// special end

  const navigate = useNavigate();

  const logoutHandler = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/">ShopEasy</Link>
      </div>

      {isLogin && (
        <ul className="nav-links">

          <li>
            <Link to="/category/computers">
              Computers
            </Link>
          </li>

          <li>
            <Link to="/category/shoes">
              Shoes
            </Link>
          </li>

          <li>
            <Link to="/category/clothes">
              Clothes
            </Link>
          </li>

          <li>
            <Link to="/category/books">
              Books
            </Link>
          </li>

          <li>
            <Link to="/category/mobiles">
              Mobiles
            </Link>
          </li>

         <li>
  <Link to="/cart">
    Cart ({cartCount})
  </Link>
</li>

          <li>
            <button
              className="logout-btn"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </li>

        </ul>
      )}

    </nav>
  );
}

export default Navbar;