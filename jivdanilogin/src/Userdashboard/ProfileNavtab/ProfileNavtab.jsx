
import React, { useState } from "react";

import { Address } from "./Address/Address";
import LabReports from "./LabReports/LabReports";
import Prescription from "./Prescription/Prescription";
import BookingHistory from "./BookingHistory/BookingHistory";



export const ProfileNavtab = () => {
  const [activeTab, setActiveTab] = useState("address");

  const renderTabContent = () => {
    switch (activeTab) {
      case "address":
        return <Address/>;
      case "LabReport":
        return <LabReports />;
      case "Prescription":
        return <Prescription />;
      case "BookingHistory":
        return <BookingHistory /> ;
      default:
        return <Address/>;
    }
  };

  return (
    <>
      {/* Nav Tabs */}
      <div
        className="border-bottom mb-4 px-3 px-md-1"
        style={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          scrollbarWidth:'none'
        }}
      >
        <ul className="nav d-flex flex-nowrap" style={{ gap: "2rem" }}>
          <li
            className="nav-item"
            style={{
              borderBottom:
                activeTab === "address" ? "3px solid rgb(154,47,254)" : "3px solid transparent",
              paddingBottom: "8px",
              cursor: "pointer",
              color: activeTab === "address" ? "rgb(154,47,254)" : "#6c757d",
              fontWeight: activeTab === "address" ? "600" : "400",
            }}
            onClick={() => setActiveTab("address")}
          >
            Address
          </li>
          <li
            className="nav-item"
            style={{
              borderBottom:
                activeTab === "LabReport" ? "3px solid rgb(154,47,254)" : "3px solid transparent",
              paddingBottom: "8px",
              cursor: "pointer",
              color: activeTab === "LabReport" ? "rgb(154,47,254)" : "#6c757d",
              fontWeight: activeTab === "LabReport" ? "600" : "400",
            }}
            onClick={() => setActiveTab("LabReport")}
          >
            Lab Reports
          </li>
          <li
            className="nav-item"
            style={{
              borderBottom:
                activeTab === "Prescription" ? "3px solid rgb(154,47,254)" : "3px solid transparent",
              paddingBottom: "8px",
              cursor: "pointer",
              color: activeTab === "Prescription" ? "rgb(154,47,254)" : "#6c757d",
              fontWeight: activeTab === "Prescription" ? "600" : "400",
            }}
            onClick={() => setActiveTab("Prescription")}
          >
            Prescription
          </li>
          <li
            className="nav-item"
            style={{
              borderBottom:
                activeTab === "BookingHistory" ? "3px solid rgb(154,47,254)" : "3px solid transparent",
              paddingBottom: "8px",
              cursor: "pointer",
              color: activeTab === "BookingHistory" ? "rgb(154,47,254)" : "#6c757d",
              fontWeight: activeTab === "BookingHistory" ? "600" : "400",
            }}
            onClick={() => setActiveTab("BookingHistory")}
          >
            BookingHistory
          </li>
        </ul>
      </div>

      {/* Tab Content */}
      <div>{renderTabContent()}</div>
    </>
  );
};
