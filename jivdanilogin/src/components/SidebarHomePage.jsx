// src/components/SidebarHomePage.jsx

import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header"; // NEW Import
import { useDispatch } from "react-redux";
import { Reactnativedatahshow } from "../redux/actions"; // Corrected import path

const SidebarHomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Start as open for desktop feel
  const dispatch = useDispatch();

  useEffect(() => {
    // Redux Dispatch Logic
    dispatch(Reactnativedatahshow(3));
    return () => {
      dispatch(Reactnativedatahshow(0));
    };
  }, [dispatch]);

  return (
    // Main Layout Container
    <div className="d-flex flex-column min-vh-100">
      {/* Fixed Header */}
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      {/* Main Content Area (Sidebar + Outlet) */}
      <div className="d-flex flex-grow-1">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* Content wrapper with margin to accommodate the sidebar */}
        <div
          className="bg-light p-3 min-vh-100 flex-grow-1"
          style={{
            marginTop: "60px", // Pushes content below the fixed header
            transition: "margin-left 0.3s ease",
            // Dynamic margin based on sidebar state
            marginLeft: sidebarOpen ? "280px" : "70px", 
            overflowY: "auto",
          }}
        >
          <main className="p-1">
            <Outlet /> 
          </main>
        </div>
      </div>
    </div>
  );
};

export default SidebarHomePage;