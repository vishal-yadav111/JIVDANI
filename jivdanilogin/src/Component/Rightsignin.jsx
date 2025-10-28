
// import { FaEyeSlash, FaEye, FaArrowAltCircleLeft } from "react-icons/fa";
// import { useState } from "react";
// import "./Rightsignin.css"
// import "./Loginpage.css";




// export const Rightsignin = () => {
//       const [forgotPassword, setForgotPassword] = useState(false);
//       const [showPassword, setShowPassword] = useState(false);
    
//   return (
//     <div className="col-lg-4 col-sm-12 order-1 order-lg-2 mx-auto">
//                 <div className="login-signup">
//                   <div className="login-box">
//                     {/* Header */}
//                     <div className="login-header">
//                       <img
//                         src="https://jivdanihospital.com/favicon.ico"
//                         alt="logo"
//                         className="login-logo"
//                       />
//                       <h2 className="hospital-title">
//                         <span className="jivdani">Jivdani</span>{" "}
//                         <span className="hospital">Hospital</span>
//                       </h2>
//                     </div>

//                     {/* Login vs Reset Password */}
//                     {!forgotPassword ? (
//                       <>
//                         <h3 className="signin-title">Sign In</h3>
//                         <p className="muted">
//                           Welcome! Please enter your details
//                         </p>

//                         <form>
//                           {/* Email */}
//                           <div className="form-group mb-1">
//                             <label className="text">Email</label>
//                             <input
//                               type="email"
//                               placeholder="Enter Your Email"
//                               className="form-control my-input"
//                             />
//                           </div>

//                           {/* Password */}
//                           <div className="form-group mb-1">
//                             <label className="text">Password</label>
//                             <div className="input-group">
//                               <input
//                                 type={showPassword ? "text" : "password"}
//                                 placeholder="Password"
//                                 className="form-control my-input"
//                               />
//                               <span
//                                 className="input-group-text"
//                                 style={{ cursor: "pointer", background: "white" }}
//                                 onClick={() => setShowPassword(!showPassword)}
//                               >
//                                 {showPassword ? (
//                                   <FaEyeSlash
//                                     color="rgb(156, 58, 248)"
//                                     size={25}
//                                   />
//                                 ) : (
//                                   <FaEye color="rgb(156, 58, 248)" size={25} />
//                                 )}
//                               </span>
//                             </div>
//                           </div>

//                           {/* Remember + Forgot */}
//                           <div className="d-flex justify-content-between align-items-center mb-2">
//                             <div className="form-check">
//                               <input
//                                 className="form-check-input"
//                                 type="checkbox"
//                                 id="rememberMe"
//                               />
//                               <label
//                                 className="form-check-label"
//                                 htmlFor="rememberMe"
//                               >
//                                 Remember Me
//                               </label>
//                             </div>
//                             <button
//                               type="button"
//                               className="link-button"
//                               onClick={() => setForgotPassword(true)}
//                             >
//                               Forgot password?
//                             </button>
//                           </div>

//                           {/* Sign In */}
//                           <button className="btn signbutton " type="submit">
//                             Sign In
//                           </button>
//                           <p
//                             style={{
//                               textAlign: "center",
//                               fontSize: "12px",
//                               marginTop: "10px",
//                             }}
//                           >
//                             By clicking on 'Sign In', you acknowledge the{" "}
//                             <a href="/"> Terms of Services</a> and{" "}
//                             <a href="/">Privacy Policy</a>
//                           </p>
//                           <p style={{ textAlign: "center", fontSize: "15px" }}>
//                             Not an existing user?{" "}
//                             <button type="button" className="link-button">
//                               Sign up for demo
//                             </button>
//                           </p>
//                         </form>
//                       </>
//                     ) : (
//                       <>
//                         <h3 className="signin-title">Reset Password</h3>
//                         <p className="muted">
//                           Enter your email address to reset your password
//                         </p>

//                         <form>
//                           <div className="form-group mb-3">
//                             <label className="text">Email</label>
//                             <input
//                               type="email"
//                               placeholder="Enter Your Email"
//                               className="form-control my-input"
//                             />
//                           </div>
//                           <button className="btn signbutton mt-3" type="submit">
//                             Send Reset Link
//                           </button>
//                         </form>

//                         <p className="back-to-login">
//                           <button
//                             type="button"
//                             className="link-button"
//                             onClick={() => setForgotPassword(false)}
//                           >
//                             <FaArrowAltCircleLeft size={15} /> Back to Login
//                           </button>
//                         </p>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </div>
//   )
// }



import { useState } from "react";
import "./Rightsignin.css";
import "./Loginpage.css";
import { LoginForm } from "./Loginform";
import { ResetPasswordForm } from "./Resetpasswordform";

export const Rightsignin = () => {
  const [forgotPassword, setForgotPassword] = useState(false);

  return (
    <div className="col-lg-4 col-sm-12 order-1 order-lg-2 mx-auto">
      <div className="login-signup">
        <div className="login-box">
          {/* Header */}
          <div className="login-header">
            <img
              src="https://jivdanihospital.com/favicon.ico"
              alt="logo"
              className="login-logo"
            />
            <h2 className="hospital-title">
              <span className="jivdani">Jivdani</span>{" "}
              <span className="hospital">Hospital</span>
            </h2>
          </div>

          {/* Toggle Login / Reset */}
          {!forgotPassword ? (
            <LoginForm onForgotPassword={() => setForgotPassword(true)} />
          ) : (
            <ResetPasswordForm onBackToLogin={() => setForgotPassword(false)} />
          )}
        </div>
      </div>
    </div>
  );
};
