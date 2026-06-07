//login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const LogIn = ()=>{
    const navigate = useNavigate();
    //formState
    const [formState,setFormState] = useState({
        email : '',
        password : ''
    });
    //formState handler function
    const formStateHandler = ()=>{
        let getData = localStorage.getItem('user')
        if(getData){
            let jsonData = JSON.parse(getData);
            console.log(jsonData);
            if(formState.email == jsonData.email && formState.password == jsonData.password){
                alert('you have logged in successfully')


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
    return(
       <>
       <h1>LogIn page</h1>
        <div>
        <label>Email:
            <input type="email" placeholder="Enter your email"
            autoComplete="new-email" 
            value={formState.email}
            onChange={(e)=>{
                setFormState({
                    ...formState,
                    email : e.target.value
                })
            }} />
        </label>
       </div>

        <div>
        <label>Password:
            <input type="password" placeholder="Enter your password"
            autoComplete="new-password"
            value={formState.password}
            onChange={(e)=>{
            setFormState({
                ...formState,
                password : e.target.value
            })
            }} />
        </label>
       </div>
       <button onClick={formStateHandler}>Sign up</button>
       <p>Don't have an account?sign up first
        <Link to='/sign-up'>Login</Link>
       </p>
       </>
    )
}
export default LogIn;