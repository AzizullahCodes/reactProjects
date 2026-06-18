import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Signup.css";

function Signup() {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const navigate = useNavigate();

  const signupHandler = (e) => {

    e.preventDefault();

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExists =
      users.find(
        (user) =>
          user.email === email
      );

    if (alreadyExists) {
      alert("Email already exists");
      return;
    }

    const newUser = {
      name,
      email,
      password
    };

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert("Signup Successful");

    navigate("/login");
  };

  return (
    <div className="signup-container">

      <form
        className="signup-form"
        onSubmit={signupHandler}
      >

        <h2>Signup</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button type="submit">
          Signup
        </button>

        <p>
          Already have an account?
          <Link to="/login">
            Login
          </Link>
        </p>

      </form>

    </div>
  );
}

export default Signup;