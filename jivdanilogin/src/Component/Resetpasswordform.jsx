import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export const ResetPasswordForm = ({ onBackToLogin }) => {
  return (
    <>
      <h3 className="signin-title">Reset Password</h3>
      <p className="muted">Enter your email address to reset your password</p>

      <form>
        <div className="form-group mb-3">
          <label className="text">Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="form-control my-input"
          />
        </div>
        <button className="btn signbutton mt-3" type="submit">
          Send Reset Link
        </button>
      </form>

      <p className="back-to-login">
        <button type="button" className="link-button" onClick={onBackToLogin}>
          <FaArrowAltCircleLeft size={15} /> Back to Login
        </button>
      </p>
    </>
  );
};
