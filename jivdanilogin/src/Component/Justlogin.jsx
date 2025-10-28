
import { useState } from "react";
import { Curvybg } from "./Curvybg";
import "./Loginpage.css";
import { Rightsignin } from "./Rightsignin";
import { Lefsideadvertisment } from "./Lefsideadvertisment";


export const Justlogin = () => {


  return (
    <div className="body1">
      <div className="curvy-wrapper">
        {/* Background */}
        <Curvybg />

        <div className="container-fluid container1">
          <div className="form-container1">
            <div className="row">
              {/*                         Left Side (Advertisement)                     */}
              <Lefsideadvertisment />

              {/*                        Right Side (Login / Forgot Password)                */}
            <Rightsignin/>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};
