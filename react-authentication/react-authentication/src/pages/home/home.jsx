import React from "react";
import { useNavigate } from "react-router-dom";
const Home = ()=>{
  const navigate = useNavigate('')
  const logOutHandler = ()=>{
    let users = JSON.parse(localStorage.getItem('users'));
  let loggedUser = JSON.parse(localStorage.getItem('loggedInUser'));
  console.log(loggedUser)
  console.log(users);
  let requiredIndex = users?.findIndex((item)=> item.email == loggedUser.email);
  console.log(requiredIndex)
  users.splice(requiredIndex,1);
  localStorage.setItem('users',JSON.stringify(users))
  localStorage.removeItem('loggedInUser')
  navigate('/login')
  }
  return(
    <>
    <h1>Home page</h1>
    <button onClick={logOutHandler}>log out</button>
    </>
  )
}
export default Home;