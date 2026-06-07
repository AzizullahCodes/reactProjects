
//login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login.css";

const LogIn = () => {
        const navigate = useNavigate();
    //formState
    const [formState,setFormState] = useState({
        email : '',
        password : ''
    });
    //formState handler function
    const formStateHandler = ()=>{
        if(formState.name == '' || formState.email == '' || formState.password == ''){
            alert('plz enter data')
            return
        }
        else{
            let getData = localStorage.getItem('user')
        if(getData){
            let jsonData = JSON.parse(getData);
            console.log(jsonData);
            if(formState.email == jsonData.email && formState.password == jsonData.password){
                alert('you have logged in successfully')
                navigate('/')


            }
            else{
                alert('incorrect email or password, try again')

            }
        }
        else(
            alert('you have not account signup first'),
            navigate('/sign-up')
        )
        //clear inputs 
        setFormState({
            email : '',
            password : ''
        })
        }

    }
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
        <div className="login-form">

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="new-email"
              value={formState.email}
                          onChange={(e)=>{
                setFormState({
                    ...formState,
                    email : e.target.value
                })
            }}
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <div className="password-box">
              <input
                type="password"
                placeholder="Enter your password"
                autoComplete="new-password"
                value={formState.password}
                            onChange={(e)=>{
            setFormState({
                ...formState,
                password : e.target.value
            })
            }}
              />
              <span>👁</span>
            </div>
          </div>

          <button className="login-btn" onClick={formStateHandler}>
            Log in
          </button>

          <p className="signup-text">
            Don't have an account?
            <Link to='/sign-up' style={{textDecoration:'none'}}><span> Sign up</span></Link>
            
          </p>

        </div>

      </div>
    </div>
  );
};

export default LogIn;