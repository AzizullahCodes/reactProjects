// //sign-up.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// const SignUp = ()=>{
//     const navigate = useNavigate();
//     //formState
//     const [formState,setFormState] = useState({
//         name : '',
//         email : '',
//         password : ''
//     });
//     //formState handler function
//     const formStateHandler = ()=>{
// if(
//     formState.name == '' || formState.email == '' || formState.password == ''
// ){
//     alert('plz enter data')
// }
// else{
//     //first we see that if user is availale in localstorage if available we get/else we store it in localstorage
// let getUser = JSON.parse(localStorage.getItem('user'));
// if(getUser){
//     alert('user already existed in local storage')
// }
// else{
//      //creating an object to storing in localstorage
//         let obj = {
//             name :formState.name,
//             email : formState.email,
//             password : formState.password
//         }
//         console.log(obj)
//         // clear inputs 
//         setFormState({
//             name : '',
//             email: '',
//             password : ''
//         })
// //set in local storage 
// let stringifyObject = JSON.stringify(obj);
// localStorage.setItem('user',stringifyObject)
// }
// alert('you have sign up successfuly')
// navigate('/login')

       
// }
//     }
//     return(
//        <>
//        <h1>Sign Up here</h1>
//        <div>
//         <label>Name:
//             <input type="name" placeholder="Enter your name"
            // value={formState.name}
            // onChange={(e)=>{
            //     setFormState(
            //     {
            //         ...formState,
            //         name : e.target.value
            //     }
            //     )

            // }} />
//         </label>
//        </div>

//         <div>
//         <label>Email:
//             <input type="email" placeholder="Enter your email"
//             autoComplete="new-email" 
//             value={formState.email}
            // onChange={(e)=>{
            //     setFormState({
            //         ...formState,
            //         email : e.target.value
            //     })
            // }} />
//         </label>
//        </div>

//         <div>
//         <label>Password:
//             <input type="password" placeholder="Enter your password"
//             autoComplete="new-password"
//             value={formState.password}
            // onChange={(e)=>{
            // setFormState({
            //     ...formState,
            //     password : e.target.value
            // })
            // }} />
//         </label>
//        </div>
//        <button onClick={formStateHandler}>Sign up</button>
//        <p>Already have an account?
//         <Link to='/login'>Login</Link>
//        </p>
//        </>
//     )
// }
// export default SignUp;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./sign-up.css";

const SignUp = () => {
        const navigate = useNavigate();
    //formState
    const [formState,setFormState] = useState({
        name : '',
        email : '',
        password : ''
    });
    //formState handler function
    const formStateHandler = ()=>{
if(
    formState.name == '' || formState.email == '' || formState.password == ''
){
    alert('plz enter data')
}
else{
    //first we see that if user is availale in localstorage if available we get/else we store it in localstorage
let getUser = JSON.parse(localStorage.getItem('user'));
if(getUser){
    alert('user already existed in local storage')
}
else{
     //creating an object to storing in localstorage
        let obj = {
            name :formState.name,
            email : formState.email,
            password : formState.password
        }
        console.log(obj)
        // clear inputs 
        setFormState({
            name : '',
            email: '',
            password : ''
        })
//set in local storage 
let stringifyObject = JSON.stringify(obj);
localStorage.setItem('user',stringifyObject)
}
alert('you have sign up successfuly')
navigate('/login')

       
}
    }
       
  return (
    <div className="signup-container">
      <div className="signup-card">

        <div className="logo">
          <div className="logo-circle"></div>
        </div>

        <h1>Create an account</h1>
        <div className="signup-form">

          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name"
                        value={formState.name}
            onChange={(e)=>{
                setFormState(
                {
                    ...formState,
                    name : e.target.value
                }
                )

            }} />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email"
            autoComplete="new-email"
                        onChange={(e)=>{
                setFormState({
                    ...formState,
                    email : e.target.value
                })
            }} />
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="password-box">
              <input type="password" placeholder="Create a password"
              autoComplete="new-password"
                          onChange={(e)=>{
            setFormState({
                ...formState,
                password : e.target.value
            })
            }} />
              <span>👁</span>
            </div>
          </div>

          <div className="requirements">
            <p>✔ Must be at least 8 characters</p>
            <p>✔ Must contain one special character</p>
          </div>

          <button className="signup-btn" onClick={formStateHandler}>
            Create Account
          </button>

          <p className="login-text">
            Already have an account?
            <Link to='/login' style={{textDecoration:'none'}}><span> Log in</span></Link>
            
          </p>

        </div>
      </div>
    </div>
  );
};

export default SignUp;