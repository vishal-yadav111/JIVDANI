// src/components/Sidebar.jsx

// --- Placeholder Constants for Role Logic ---
const ROLE = 'ADMIN';
const ROLEDOCTOR = 'DOCTOR';
const SUPER_ADNIM = 'SUPER_ADMIN';
// ------------------------------------------

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome, faUsers, faFileText, faCalendarDays, faChartBar, faHospital,
  faBed, faFlask, faMicroscope, faFolder, faDollarSign, faClock,
  faUserNurse,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

// --- Menu Data (Your original data) ---
const menuItems = [
  // ... (Your original menuItems array is placed here) ...
  {
    id: "Medication",
    icon: faHome,
    title: "Medication",
    path: "/",
     subItems: [
      { id: "Medicine Analyst", title: "Medicine Analyst", icon: faFileText, path: "/" },
      { id: "Dosage", title: "Dosage", icon: faCalendarDays, path: "/dosage" },
      { id: "Units", title: "Units", icon: faChartBar, path: "/Units" },
      // ... other Medication items
    ],
  },
  {
    id: "History",
    icon: faUsers,
    title: "History",
    subItems: [
      { id: "Allergies", title: "Allergies", icon: faFileText, path: "/Allergy" },
      // ... other History items
    ],
  },
  {
    id: "Complaints",
    icon: faHospital,
    title: "Complaints",
    subItems: [
      { id: "Complaints", title: "Complaints", icon: faBed, path: "/Complaints" }, // Changed path to /Complaints
    ],
  },
  // ... (rest of your original menuItems array goes here)
  {
    id: "Diagnosis",
    icon: faUserNurse,
    title: "Diagnosis",
    subItems: [
      { id: "Diagnosis", title: "Diagnosis", icon: faDollarSign, path: "/Diagnosis" },
      { id: "Duration", title: "Duration", icon: faClock, path: "/Duration" },
    ],
  },
  {
    id: "Lab Test and Imaging",
    icon: faFlask,
    title: "Lab Test and Imaging",
    subItems: [
      { id: "Lab Test and Imaging", title: "Lab Test and Imaging", icon: faMicroscope, path: "/LabTestImaging" },
    ],
  },
  {
    id: "Systemic EXamination",
    icon: faFolder,
    title: "Systemic EXamination",
    active: false,
    subItems: [
      { id: "General", title: "General", icon: faFolder, path: "/General" },
      { id: " CVS", title: " CVS", icon: faFolder, path: "/CVS" },
      { id: " RS", title: "RS", icon: faFolder, path: "/RS" },
      { id: "CNS", title: "CNS", icon: faFolder, path: "/CNS" },
      { id: " PA", title: " PA", icon: faFolder, path: "/PA" },
      { id: " ENT", title: "ENT", icon: faFolder, path: "/ENT" },
    ],
  },
  {
    id: "Obstetric History",
    icon: faFolder,
    title: "Obstetric History",
    active: false,
    subItems: [
      { id: "Pragnancy Outcomes", title: "Pragnancy Outcomes", icon: faFolder, path: "/PragnancyOutcomes" },
    ],
  },
  {
    id: "Test Requested",
    icon: faFolder,
    title: "Test Requested",
    active: false,
    subItems: [
      { id: "Test Requested", title: "Test", icon: faFolder, path: "/TestRequested" },
    ],
  },
];

const DoctorItems = [
  {
    id: "bedStatus",
    title: "Bed Status",
    icon: faBed,
    path: "/dashboard/bed-status",
    active: true,
    subItems: [],
  },
  {
    id: "dischargeSummary",
    title: "Discharge Summary",
    icon: faChartBar,
    path: "/dashboard/discharge-summary",
    active: true,
    subItems: [],
  },
];
// --- End Menu Data ---

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const nav = useNavigate();
  const location = useLocation();
  const currentPath = location?.pathname;

  const [currentId, setCurrentId] = useState("dashboard");
  const [expandedMenus, setExpandedMenus] = useState({});
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredSubItem, setHoveredSubItem] = useState(null);

  const [MenuList, setMenuList] = useState(menuItems);
  const { role } = useSelector((state) => state.user);
  
  // Note: The role logic is simplified here as we don't have the constants defined
  useEffect(() => {
    try {
      if (role === ROLE || role === SUPER_ADNIM) {
        setMenuList(menuItems);
      } else if (role === ROLEDOCTOR) {
        setMenuList(DoctorItems);
      }
    } catch (e) {
      console.error(e);
    }
  }, [role]); // Dependency on role

  useEffect(() => {
    const findActiveMenuItem = (path) => {
      // Logic to find which item/subitem matches the current path
      for (let item of MenuList) {
        if (item.path === path) {
          setCurrentId(item.id);
          return;
        }
        if (item.subItems) {
          // Open parent menu if a subitem is active
          const subItemIndex = item.subItems.findIndex(sub => sub.path === path);
          if (subItemIndex !== -1) {
            setCurrentId(item.subItems[subItemIndex].id);
            setExpandedMenus(prev => ({ ...prev, [MenuList.indexOf(item)]: true }));
            return;
          }
        }
      }
    };
    findActiveMenuItem(currentPath);
  }, [currentPath, MenuList]);

  // Toggle menu expansion
  const toggleMenu = (index) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div
      className={`sidebar position-fixed h-100 pb-4 bg-white border-end shadow-sm ${
        sidebarOpen ? "sidebar-open" : "sidebar-closed"
      }`}
      style={{
        width: sidebarOpen ? "280px" : "70px",
        zIndex: 1000,
        transition: "all 0.3s ease",
        overflowY: "auto",
        overflowX: "hidden",
        // Position below the fixed header
        top: "60px", 
      }}
      // Use state logic to keep it open when manually expanded
      onMouseEnter={() => !sidebarOpen && setSidebarOpen(true)}
      onMouseLeave={() => sidebarOpen && setSidebarOpen(false)}
    >
      {/* Menu Items */}
      <div className="py-2 mb-5">
        {MenuList.map((item, index) => {
            // ... (Your original rendering logic for parent and sub-items) ...
            const hasActiveSubItem = item.subItems?.some(
              (subItem) => subItem.id === currentId
            );
            const isActiveParent = item?.active
              ? item?.id === currentId
              : hasActiveSubItem;
            const isHovered = hoveredItem === `parent-${index}`;

            return (
              <div key={index} className="mb-1">
                <div
                  className={`d-flex align-items-center justify-content-between px-3 py-2 mx-2 rounded-3 cursor-pointer
                  ${
                    isActiveParent
                      ? "bg-primary text-white"
                      : isHovered
                      ? "bg-light text-primary"
                      : "text-muted"
                  }`}
                  style={{
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    minHeight: "44px",
                  }}
                  onMouseEnter={() => setHoveredItem(`parent-${index}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => {
                    if (item?.active) {
                      setCurrentId(item?.id);
                      nav(item?.path);
                    } else if (item.subItems.length > 0) {
                      toggleMenu(index);
                    }
                  }}
                >
                  {/* ... (Icon and Title rendering) ... */}
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={`text-center
                      ${
                        isActiveParent
                          ? "text-white"
                          : isHovered
                          ? "text-primary"
                          : "text-muted"
                      }`}
                      style={{ fontSize: "1rem", transition: "color 0.3s ease", width: "16px" }}
                    />
                    {sidebarOpen && (
                      <span className="fw-medium ms-3" style={{ fontSize: "0.9rem" }}>{item.title}</span>
                    )}
                  </div>

                  {/* Arrow for expandable items */}
                  {sidebarOpen && item.subItems.length > 0 && (
                    <span
                      className="ms-2 d-none d-lg-block"
                      style={{
                        transform: expandedMenus[index] ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                        fontSize: "0.7rem",
                      }}
                    > ▼ </span>
                  )}
                </div>

                {/* Sub Items */}
                {sidebarOpen && item.subItems && item.subItems.length > 0 && expandedMenus[index] && (
                    <div
                      className="ms-3 mt-1"
                      style={{ overflow: "hidden" }}
                    >
                      {item.subItems.map((subItem, subIndex) => {
                        const isActiveSubItem = subItem?.id === currentId;
                        const isSubHovered = hoveredSubItem === `sub-${index}-${subIndex}`;

                        return (
                          <div
                            key={subIndex}
                            className={`d-flex align-items-center px-3 py-2 mx-2 mt-1 rounded-2 cursor-pointer border-start
                            ${
                              isActiveSubItem
                                ? "bg-primary bg-opacity-10 text-primary border-primary border-3"
                                : isSubHovered
                                ? "bg-light text-primary border-light border-3"
                                : "text-muted border-transparent border-3"
                            }`}
                            style={{
                              fontSize: "0.85rem",
                              transition: "all 0.3s ease",
                              cursor: "pointer",
                              minHeight: "36px",
                            }}
                            onClick={() => {
                              setCurrentId(subItem?.id);
                              if (subItem?.path) {
                                nav(subItem?.path); // This correctly triggers navigation
                              }
                            }}
                            onMouseEnter={() => setHoveredSubItem(`sub-${index}-${subIndex}`)}
                            onMouseLeave={() => setHoveredSubItem(null)}
                          >
                            <FontAwesomeIcon
                              icon={subItem.icon}
                              className={`me-2
                              ${
                                isActiveSubItem
                                  ? "text-primary" : isSubHovered
                                  ? "text-primary" : "text-muted"
                              }`}
                              style={{ fontSize: "0.85rem", transition: "color 0.3s ease", width: "14px" }}
                            />
                            <span className={isActiveSubItem ? "fw-semibold" : "fw-normal"}>{subItem.title}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
              </div>
            );
          })
        }
      </div>
    </div>
  );
}