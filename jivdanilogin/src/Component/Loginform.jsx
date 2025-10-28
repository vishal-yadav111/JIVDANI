import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import "./Rightsignin.css";

export const LoginForm = ({ onForgotPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <h3 className="signin-title">Sign In</h3>
      <p className="muted">Welcome! Please enter your details</p>

      <form>
        {/* Email */}
        <div className="form-group mb-1">
          <label className="text">Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="form-control my-input"
          />
        </div>

        {/* Password */}
        <div className="form-group mb-1">
          <label className="text">Password</label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="form-control my-input"
            />
            <span
              className="input-group-text"
              style={{ cursor: "pointer", background: "white" }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEyeSlash color="rgb(156, 58, 248)" size={25} />
              ) : (
                <FaEye color="rgb(156, 58, 248)" size={25} />
              )}
            </span>
          </div>
        </div>

        {/* Remember + Forgot */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember Me
            </label>
          </div>
          <button
            type="button"
            className="link-button"
            onClick={onForgotPassword}
          >
            Forgot password?
          </button>
        </div>

        {/* Sign In */}
        <button className="btn signbutton" type="submit">
          Sign In
        </button>
        <p style={{ textAlign: "center", fontSize: "12px", marginTop: "10px" }}>
          By clicking on 'Sign In', you acknowledge the{" "}
          <a href="/"> Terms of Services</a> and{" "}
          <a href="/">Privacy Policy</a>
        </p>
        <p style={{ textAlign: "center", fontSize: "15px" }}>
          Not an existing user?{" "}
          <button type="button" className="link-button">
            Sign up for demo
          </button>
        </p>
      </form>
    </>
  );
};
