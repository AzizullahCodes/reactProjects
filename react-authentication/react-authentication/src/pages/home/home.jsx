//home.jsx
import React from "react";
import { useNavigate } from "react-router-dom"

const Home = ()=>{
    let getData = JSON.parse(localStorage.getItem('user'));
const navigate = useNavigate('');
//log out function 
const logoutHandler = ()=>{
    localStorage.removeItem('user');
    navigate('/login')
}
    return(
        <>
        <h1>Home page</h1>
        <h2>{
            `Welcome ${getData.name}`
            }</h2>
            <button onClick={logoutHandler}>log out</button>
        </>
    )
}
export default Home;