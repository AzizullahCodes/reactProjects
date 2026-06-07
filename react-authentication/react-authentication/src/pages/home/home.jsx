// //home.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom"

// const Home = ()=>{
//     let getData = JSON.parse(localStorage.getItem('user'));
// const navigate = useNavigate('');
// //log out function 
// const logoutHandler = ()=>{
//     localStorage.removeItem('user');
//     navigate('/login')
// }
//     return(
//         <>
//         <h1>Home page</h1>
//         <h2>{
//             `Welcome ${getData.name}`
//             }</h2>
//             <button onClick={logoutHandler}>log out</button>
//         </>
//     )
// }
// export default Home;


import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./home.css";

const Home = () => {
  let getData = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate("");

  // log out function
  const logoutHandler = () => {

    Swal.fire({
  title: "Your account has been deleted",
  icon: "success",
  draggable: true
});
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="home-container">

      <div className="welcome-card">

        <div className="welcome-badge">
          👋 Welcome Back
        </div>

        <h1>HOME</h1>

        <h2>
          {`Welcome ${getData.name}`}
        </h2>

        <p>
          You have successfully logged into your account.
          welcome on home page.
        </p>

        <button onClick={logoutHandler}>
          Log Out
        </button>

      </div>

    </div>
  );
};

export default Home;