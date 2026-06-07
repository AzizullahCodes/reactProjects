//navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
const Navbar = ()=>{
    return(
        <>
      <ul>
        <li>
            <Link to='/'> Home</Link>
           </li>

           <li>
            <Link to='/about'> About</Link>
           </li>

           <li>
            <Link to='/sign-up'> Sign Up</Link>
           </li>

           <li>
            <Link to='/login'> Log In</Link>
           </li>
      </ul>
        </>
    )
}
export default Navbar;