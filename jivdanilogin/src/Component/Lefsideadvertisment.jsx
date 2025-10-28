import React from 'react'
import "./Loginpage.css";

export const Lefsideadvertisment = () => {
  return (
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
  )
}
