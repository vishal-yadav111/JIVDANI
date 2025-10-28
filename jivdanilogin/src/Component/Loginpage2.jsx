// import { FaEyeSlash, FaEye, FaArrowAltCircleLeft } from "react-icons/fa";
// import { useState } from "react";
// import { Curvybg } from "./Curvybg";
// import "./Loginpage.css";

// export const Loginpage2 = () => {
//   const [forgotPassword, setForgotPassword] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="body1">
//       <div className="curvy-wrapper">
//         {/* Background */}
//         <Curvybg />

//         <div className="container-fluid container1">
//           <div className="form-container1">
//             <div className="row">
//               {/* ====================== Left Side (Advertisement) ====================== */}
//               <div className="col-lg-8 col-12 order-2 order-lg-1 addv-container">
//                 <h2 className="adv-heading">
//                   Jivdani is Mumbai's Most Trusted Hospital
//                 </h2>
//                 <p className="adv-subheading">
//                   Trusted by 14,000+ Patients across 16 District
//                 </p>

//                 <div className="addv-container-inside">
//                   {/* Doctor Illustration */}
//                   <img
//                     src="https://png.pngtree.com/png-vector/20240220/ourmid/pngtree-male-doctor-photo-png-image_11755264.png"
//                     alt="Doctor Illustration"
//                     className="doctor-img img-fluid"
//                   />

//                   {/* Advertisement Features */}
//                   <div className="advertisment-card">
//                     <div className="addv-content">
//                       <img
//                         src="https://md.healthplix.com/resources/images/3rdWaveLogin/newIcon-01.svg"
//                         alt="Guidelines Icon"
//                         height={60}
//                         width={52}
//                       />
//                       <p className="parafraph">
//                         Write Generic / Branded prescriptions, comply seamlessly
//                         with NMC guidelines
//                       </p>
//                     </div>

//                     <div className="addv-content">
//                       <img
//                         src="https://md.healthplix.com/resources/images/3rdWaveLogin/Icon-02.svg"
//                         alt="Refer & Earn"
//                         height={60}
//                         width={52}
//                       />
//                       <p className="parafraph">Refer & Earn up to ₹60,000</p>
//                     </div>

//                     <div className="addv-content">
//                       <img
//                         src="https://md.healthplix.com/resources/images/3rdWaveLogin/Icon-03.svg"
//                         alt="WhatsApp Engagement"
//                         height={60}
//                         width={52}
//                       />
//                       <p className="parafraph">
//                         Start Patient Engagement on WhatsApp, with a masked
//                         number!
//                       </p>
//                     </div>

//                     <div className="addv-content">
//                       <img
//                         src="https://md.healthplix.com/resources/images/3rdWaveLogin/Icon-04.svg"
//                         alt="DDI Feature"
//                         height={60}
//                         width={52}
//                       />
//                       <p className="parafraph">
//                         DDI - Proactive nudges on medicine interactions
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Footer (Support Info) */}
//                 <div className="adv-footer">
//                   <p>Need help? Call us @1800 1020 127</p>
//                   <p>Terms & condition applied</p>
//                 </div>
//               </div>

//               {/* ====================== Right Side (Login / Forgot Password) ====================== */}
//               <div className="col-lg-4 col-sm-12 order-1 order-lg-2 mx-auto">
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
//                           Welcome back! Please enter your details
//                         </p>

//                         <form>
//                           {/* Email */}
//                           <div className="mb-3">
//                             <label className="form-label text">Email</label>
//                             <input
//                               type="email"
//                               placeholder="Enter Your Email"
//                               className="form-control my-input"
//                             />
//                           </div>

//                           {/* Password */}
//                           <div className="mb-3">
//                             <label className="form-label text">Password</label>
//                             <div className="input-group">
//                               <input
//                                 type={showPassword ? "text" : "password"}
//                                 placeholder="Password"
//                                 className="form-control my-input"
//                               />
//                               <span
//                                 className="input-group-text"
//                                 style={{
//                                   cursor: "pointer",
//                                   background: "white",
//                                 }}
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
//                           <div className="d-flex justify-content-between align-items-center mb-3">
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
//                           <button type="submit" className="btn signbutton mt-3">
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
//                             <a href="/">Terms of Services</a> and{" "}
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
//                           <div className="mb-3">
//                             <label className="form-label text">Email</label>
//                             <input
//                               type="email"
//                               placeholder="Enter Your Email"
//                               className="form-control my-input"
//                             />
//                           </div>
//                           <button type="submit" className="btn signbutton mt-3">
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
//             </div>
//           </div>
//         </div>
//       </div>  
//     </div>
//   );
// };










import { FaEyeSlash, FaEye, FaArrowAltCircleLeft } from "react-icons/fa";
import { useState } from "react";
import { Curvybg } from "./Curvybg";
import "./Loginpage.css";

export const Loginpage = () => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="body1">
      <div className="curvy-wrapper">
        {/* Background */}
        <Curvybg />

        <div className="container-fluid container1">
          <div className="form-container1">
            <div className="row">
              {/* ====================== Left Side (Advertisement) ====================== */}
              <div className="col-lg-8 col-12 order-2 order-lg-1 addv-container">
                <h2 className="adv-heading">
                  Jivdani is Mumbai's Most Trusted Hospital
                </h2>
                <p className="adv-subheading">
                  Trusted by 14,000+ Patients across 16 District
                </p>

                <div className="addv-container-inside">
                  {/* Doctor Illustration */}
                  <img
                    src="https://png.pngtree.com/png-vector/20240220/ourmid/pngtree-male-doctor-photo-png-image_11755264.png"
                    alt="Doctor Illustration"
                    className="doctor-img img-fluid"
                  />

                  {/* Advertisement Features */}
                  <div className="advertisment-card">
                    <div className="addv-content">
                      <img
                        src="https://md.healthplix.com/resources/images/3rdWaveLogin/newIcon-01.svg"
                        alt="Guidelines Icon"
                        height={60}
                        width={52}
                      />
                      <p className="parafraph">
                        Write Generic / Branded prescriptions, comply seamlessly
                        with NMC guidelines
                      </p>
                    </div>

                    <div className="addv-content">
                      <img
                        src="https://md.healthplix.com/resources/images/3rdWaveLogin/Icon-02.svg"
                        alt="Refer & Earn"
                        height={60}
                        width={52}
                      />
                      <p className="parafraph">Refer & Earn up to ₹60,000</p>
                    </div>

                    <div className="addv-content">
                      <img
                        src="https://md.healthplix.com/resources/images/3rdWaveLogin/Icon-03.svg"
                        alt="WhatsApp Engagement"
                        height={60}
                        width={52}
                      />
                      <p className="parafraph">
                        Start Patient Engagement on WhatsApp, with a masked
                        number!
                      </p>
                    </div>

                    <div className="addv-content">
                      <img
                        src="https://md.healthplix.com/resources/images/3rdWaveLogin/Icon-04.svg"
                        alt="DDI Feature"
                        height={60}
                        width={52}
                      />
                      <p className="parafraph">
                        DDI - Proactive nudges on medicine interactions
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer (Support Info) */}
                <div className="adv-footer">
                  <p>Need help? Call us @1800 1020 127</p>
                  <p>Terms & condition applied</p>
                </div>
              </div>

              {/* ====================== Right Side (Login / Forgot Password) ====================== */}
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

                    {/* Login vs Reset Password */}
                    {!forgotPassword ? (
                      <>
                        <h3 className="signin-title">Sign In</h3>
                        <p className="muted">
                          Welcome back! Please enter your details
                        </p>

                        <form>
                          {/* Email */}
                          <div className="form-group mb-3">
                            <label className="text">Email</label>
                            <input
                              type="email"
                              placeholder="Enter Your Email"
                              className="form-control my-input"
                            />
                          </div>

                          {/* Password */}
                          <div className="form-group mb-3">
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
                                  <FaEyeSlash
                                    color="rgb(156, 58, 248)"
                                    size={25}
                                  />
                                ) : (
                                  <FaEye color="rgb(156, 58, 248)" size={25} />
                                )}
                              </span>
                            </div>
                          </div>

                          {/* Remember + Forgot */}
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="rememberMe"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="rememberMe"
                              >
                                Remember Me
                              </label>
                            </div>
                            <button
                              type="button"
                              className="link-button"
                              onClick={() => setForgotPassword(true)}
                            >
                              Forgot password?
                            </button>
                          </div>

                          {/* Sign In */}
                          <button className="btn signbutton mt-3" type="submit">
                            Sign In
                          </button>
                          <p
                            style={{
                              textAlign: "center",
                              fontSize: "12px",
                              marginTop: "10px",
                            }}
                          >
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
                    ) : (
                      <>
                        <h3 className="signin-title">Reset Password</h3>
                        <p className="muted">
                          Enter your email address to reset your password
                        </p>

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
                          <button
                            type="button"
                            className="link-button"
                            onClick={() => setForgotPassword(false)}
                          >
                            <FaArrowAltCircleLeft size={15} /> Back to Login
                          </button>
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};
