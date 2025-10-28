import React from 'react'
import "./Rightsignin.css"
import "./Loginpage.css";

export const Authheader = () => {
  return (
  
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
  )
}
