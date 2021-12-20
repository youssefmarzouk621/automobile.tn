import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = () => {

    if (email === "") {

      toast.error("email is required");
      return false;
    }

    if (password === "") {

      toast.error("password is required");
      return false;
    }


    return true;
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
 
    if (isValid()) {
      try {
        const res = await axios.post("api/users/login", {
          email,
          password,
        });
        if(res.status===200){
            toast.success("nidham");
        }else{
            toast.error("somthing went wrong");
        }
      } catch (error) {}
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email </label>
        <input
          className="loginInput"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your Email ..."
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter your password..."
        />
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
