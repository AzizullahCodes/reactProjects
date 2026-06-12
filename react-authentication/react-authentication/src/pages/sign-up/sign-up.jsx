
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import "./sign-up.css";

// const SignUp = () => {
//         const navigate = useNavigate();
//     //formState
//     const [formState,setFormState] = useState({
//         name : '',
//         email : '',
//         password : ''
//     });
//     //formState handler function
//     const formStateHandler = () => {
//   if (formState.name == '' || formState.email == '' || formState.password == '') {
//     Swal.fire("Plz enter your data!");
//     return;
//   }

//   // Get existing users array (or empty array)
//   let users = JSON.parse(localStorage.getItem('users')) || [];

//   // Check if email already exists
//   let emailExists = users.find(user => user.email === formState.email);

//   if (emailExists) {
//     Swal.fire({
//       title: "User already existed!",
//       icon: "warning",
//       draggable: true
//     });
//     return;
//   }

//   // New user object
//   let obj = {
//     name: formState.name,
//     email: formState.email,
//     password: formState.password
//   };

//   // Push new user into array
//   users.push(obj);

//   // Save updated array back to localStorage
//   localStorage.setItem('users', JSON.stringify(users));

//   // Clear inputs
//   setFormState({ name: '', email: '', password: '' });

//   Swal.fire({
//     title: "You have signed up successfully!",
//     icon: "success",
//     draggable: true
//   });

//   navigate('/login');
// };
       
//   return (
//     <div className="signup-container">
//       <div className="signup-card">

//         <div className="logo">
//           <div className="logo-circle"></div>
//         </div>

//         <h1>Create an account</h1>
//         <div className="signup-form">

//           <div className="input-group">
//             <label>Name</label>
//             <input type="text" placeholder="Enter your name"
//                         value={formState.name}
//             onChange={(e)=>{
//                 setFormState(
//                 {
//                     ...formState,
//                     name : e.target.value
//                 }
//                 )

//             }} />
//           </div>

//           <div className="input-group">
//             <label>Email</label>
//             <input type="email" placeholder="Enter your email"
//             autoComplete="new-email"
//                         onChange={(e)=>{
//                 setFormState({
//                     ...formState,
//                     email : e.target.value
//                 })
//             }} />
//           </div>

//           <div className="input-group">
//             <label>Password</label>
//             <div className="password-box">
//               <input type="password" placeholder="Create a password"
//               autoComplete="new-password"
//                           onChange={(e)=>{
//             setFormState({
//                 ...formState,
//                 password : e.target.value
//             })
//             }} />
//               <span>👁</span>
//             </div>
//           </div>

//           <div className="requirements">
//             <p>✔ Must be at least 8 characters</p>
//             <p>✔ Must contain one special character</p>
//           </div>

//           <button className="signup-btn" onClick={formStateHandler}>
//             Create Account
//           </button>

//           <p className="login-text">
//             Already have an account?
//             <Link to='/login' style={{textDecoration:'none'}}><span> Log in</span></Link>
            
//           </p>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
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
        formState.name == ''|| formState.email == '' || formState.password == ''
      ){
        Swal.fire("Plz enter your data!")

      }
      else{
        let users = JSON.parse(localStorage.getItem('users')) || [];
      let isExisted = users.some((item)=>{
        return(
          item.email == formState.email
        )
      })
      //apply condition
      if(isExisted){
        alert('user already existed with this email')
        navigate('/login')
      }
else{
   //creating an object to storing in localstorage
        let obj = {
            name :formState.name,
            email : formState.email,
            password : formState.password
        }
        users.push(obj)
        // set in local storage
        localStorage.setItem('users',JSON.stringify(users))
        alert('you have signed up successfully')
        navigate('/login')

}
      }
      // clearinputs 
      setFormState({
        name : '',
        email : '',
        password : ''
      })
    }
// if(
//     formState.name == '' || formState.email == '' || formState.password == ''
// ){
//     // alert('plz enter data')
//     Swal.fire("Plz enter your data!");
// }
// else{
//     //first we see that if user is availale in localstorage if available we get/else we store it in localstorage
// let getUser = JSON.parse(localStorage.getItem('user'));
// //some 
// let isExisted = getUser
// if(getUser){
//     // alert('user already existed in local storage'); 
//     Swal.fire({
//   title: "user already existed!",
//   icon: "success",
//   draggable: true
// });
//     navigate('/login')
//     return
// }
// else{
    //  //creating an object to storing in localstorage
    //     let obj = {
    //         name :formState.name,
    //         email : formState.email,
    //         password : formState.password
    //     }
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
// // alert('you have sign up successfuly')
// Swal.fire({
//   title: "You have sign up successfully!",
//   icon: "success",
//   draggable: true
// });
// navigate('/login')

       
// }
//     }
       
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