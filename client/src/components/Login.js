import React from "react";
import "../style/Login.css";

const Login = () => {
    return (
        <section className="login-box">
            <button id = "close-btn">X</button>
            <h1 id = "greeting">Welcome Back!</h1>
            <label htmlFor = "email">Email</label>
            <input type = "email" id = "email"/>
            <label htmlFor = "password">Password</label>
            <input type = "password" id = "password"/>
            <button id = "sign-in">Sign In</button>
            <h3>Don't have an account? <a href = "/Register">Register</a></h3>
        </section>
    );
};

export default Login;