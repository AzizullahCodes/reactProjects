import React from "react";
import Swal from 'sweetalert2'; 
import { useNavigate } from "react-router-dom";
const Home = ()=>{
  const navigate = useNavigate('')
  const logOutHandler = ()=>{
  localStorage.removeItem('loggedInUser')
  //swal alert
   Swal.fire({
        title: 'You have logged out successfully!',
        icon: 'success',
        draggable: true,
      
       
      }).then(()=>{
        navigate('/login')
      })
 
  }
  //delete account 
  const deleteAccountFun = ()=>{
    let users = JSON.parse(localStorage.getItem('users'));
  let loggedUser = JSON.parse(localStorage.getItem('loggedInUser'));
  console.log(loggedUser)
  console.log(users);
  let requiredIndex = users?.findIndex((item)=> item.email == loggedUser.email);
  console.log(requiredIndex)
  users.splice(requiredIndex,1);
  localStorage.setItem('users',JSON.stringify(users))
  localStorage.removeItem('loggedInUser')
  //swal alert
   Swal.fire({
        title: 'Your account has been deleted permanently!',
        icon: 'error',
        draggable: true,
      }).then(()=>{
        navigate('/login')
      })
 
  }
  return(
    <>
    <h1>Home page</h1>
    <button onClick={logOutHandler}>log out</button>
    <br/>
    <button onClick={deleteAccountFun}>delete account</button>
    </>
  )
}
export default Home;