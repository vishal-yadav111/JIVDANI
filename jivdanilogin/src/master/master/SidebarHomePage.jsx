import React, { useEffect, useState } from "react";
// import IPDHeader from "./IPDHeader";
import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import { useDispatch } from "react-redux";
import { Reactnativedatahshow } from "../../actions";

const SidebarHomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Reactnativedatahshow(3));
    return () => {
      dispatch(Reactnativedatahshow(0));
    };
  }, [dispatch]);

  return (
    // Main Layout Container
    <div className="d-flex flex-column min-vh-100">
      {/* Fixed Header */}
      {/* <IPDHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
      
      {/* Main Content Area (Sidebar + Outlet) */}
      <div className="d-flex flex-grow-1" style={{ marginTop: "60px" }}>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div
          className="bg-white  min-vh-100"
          style={{
            flex: 1,
            // transition: "margin-left 0.3s ease",
            // marginLeft: sidebarOpen ? "280px" : "70px",
            marginLeft: "0px",
            overflowY: "auto", // Ensures content is scrollable
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
