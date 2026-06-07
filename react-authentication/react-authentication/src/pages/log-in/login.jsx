// //login.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// const LogIn = ()=>{
//     const navigate = useNavigate();
//     //formState
//     const [formState,setFormState] = useState({
//         email : '',
//         password : ''
//     });
//     //formState handler function
//     const formStateHandler = ()=>{
//         if(formState.name == '' || formState.email == '' || formState.password == ''){
//             alert('plz enter data')
//             return
//         }
//         else{
//             let getData = localStorage.getItem('user')
//         if(getData){
//             let jsonData = JSON.parse(getData);
//             console.log(jsonData);
//             if(formState.email == jsonData.email && formState.password == jsonData.password){
//                 alert('you have logged in successfully')
//                 navigate('/')


//             }
//             else{
//                 alert('incorrect email or password, try again')

//             }
//         }
//         else(
//             alert('you have not account signup first'),
//             navigate('/sign-up')
//         )
//         //clear inputs 
//         setFormState({
//             email : '',
//             password : ''
//         })
//         }

//     }
//     return(
//        <>
//        <h1>LogIn page</h1>
//         <div>
//         <label>Email:
//             <input type="email" placeholder="Enter your email"
//             autoComplete="new-email" 
//             value={formState.email}
//             onChange={(e)=>{
//                 setFormState({
//                     ...formState,
//                     email : e.target.value
//                 })
//             }} />
//         </label>
//        </div>

//         <div>
//         <label>Password:
//             <input type="password" placeholder="Enter your password"
//             autoComplete="new-password"
//             value={formState.password}
//             onChange={(e)=>{
//             setFormState({
//                 ...formState,
//                 password : e.target.value
//             })
//             }} />
//         </label>
//        </div>
//        <button onClick={formStateHandler}>Log In</button>
//        <p>Don't have an account?sign up first
//         <Link to='/sign-up'>sign-up</Link>
//        </p>
//        </>
//     )
// }
// export default LogIn;




import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">

        <div className="logo">
          <div className="logo-circle"></div>
        </div>

        <h1>Welcome back</h1>
        <p className="subtitle">
          Enter your credentials to access your account.
        </p>

        <div className="auth-tabs">
          <button>Sign up</button>
          <button className="active">Log in</button>
        </div>

        <form className="login-form">

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <div className="password-box">
              <input
                type="password"
                placeholder="Enter your password"
              />
              <span>👁</span>
            </div>
          </div>

          <div className="options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <span className="forgot-password">
              Forgot password?
            </span>
          </div>

          <button className="login-btn">
            Log in
          </button>

          <button className="google-btn">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Google"
            />
            Sign in with Google
          </button>

          <p className="signup-text">
            Don't have an account?
            <span> Sign up</span>
          </p>

        </form>

      </div>
    </div>
  );
};

export default Login;