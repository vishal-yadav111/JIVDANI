// src/components/Header.jsx

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <nav 
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-lg"
      style={{ height: "60px", zIndex: 1030 }} // Higher zIndex for fixed header
    >
      <div className="container-fluid">
        {/* Sidebar Toggle Button */}
        <button
          className="btn btn-outline-light d-flex align-items-center me-3"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
        >
          <FontAwesomeIcon icon={faBars} style={{ fontSize: "1.2rem" }} />
          <span className="ms-2">Menu</span>
        </button>

        <span className="navbar-brand mb-0 h1">
            🏥 **Hospital Management Demo**
        </span>
      </div>
    </nav>
  );
};

export default Header;