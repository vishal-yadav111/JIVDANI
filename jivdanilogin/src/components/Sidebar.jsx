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
  faBed, faFlask, faMicroscope, faFolder, 
 
  faAllergies,
  faUsersLine,
  faFileMedical,
  faNoteSticky,
  faBriefcaseMedical,
  faStopwatch,
  faStethoscope,
  faHeart,
  faBrain,
  faUserDoctor,
  faFaceMeh,
  faPersonPregnant,
  faSyringe,
  faDroplet,
  faQuestion,
  faRepeat,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../visitConstant/Categories";

// --- Menu Data (Your original data) ---
const menuItems = [
  // ... (Your original menuItems array is placed here) ...
  {
    id: "Medication",
    icon: faHome,
    title: "Medication",
    path: "/",
     subItems: [
      { id: "MedicineAnalyst", title: "Medicine Analyst", icon: faFileText, path: "/" },
      { id: "Dosage", title: "Dosage", icon: faCalendarDays, path: "/dosage",catid:Categories.DOSAGE.catID  },
      { id: "Units", title: "Units", icon: faChartBar, path: "/Units",catid:Categories.UNITS.catID },

             { title: "Whens", id: "Whens", icon: faQuestion ,path: "/Whens",catid:Categories.WHENS.catID},
        { title: "Frequency", id: "Frequency",   icon: faRepeat ,path: "/Frequency",catid:Categories.FREQUENCY.catID },
     
        { title: "Notes",id: "Notes",  icon: faBook ,path: "/Notes",catid:Categories.NOTE.catID},
      // ... other Medication items
    ],
  },
  {
    id: "History",
    icon: faUsers,
    title: "History",
    subItems: [
      { id: Categories.ALLERGIES.catID , title: "Allergies", icon:faAllergies, path: "/Allergy",catid:Categories.ALLERGIES.catID  },
      { id: "Personal History", title: "Personal History", icon:faNoteSticky, path: "/PersonalHistory",catid:Categories.PERSONAL_HISTORY.catID },
      { id: "Past Medical History", title: "Past Medical History", icon:faFileMedical, path: "/PastMedicalHistory",catid:Categories.PAST_MEDICAL_HISTORY.catID },
      { id: "Family History", title: "Family History", icon:faUsersLine, path: "/FamilyHistory",catid:Categories.FAMILY_HISTORY.catID },
      // ... other History items
    ],
  },
  {
    id: "Complaints",
    icon: faHospital,
    title: "Complaints",
    subItems: [
      { id: "Complaints", title: "Complaints", icon: faBed, path: "/Complaints",catid:Categories.COMPLAINTS.catID }, // Changed path to /Complaints
    ],
  },
  // ... (rest of your original menuItems array goes here)
  {
    id: "Diagnosis",
    icon: faBriefcaseMedical,
    title: "Diagnosis",
    subItems: [
      { id: "Diagnosis", title: "Diagnosis", icon: faBriefcaseMedical, path: "/Diagnosis",catid:Categories.DIAGNOSIS.catID },
      { id: "Duration", title: "Duration", icon: faStopwatch, path: "/Duration" ,catid:Categories.DURATION.catID},
    ],
  },
  {
    id: "Lab Test and Imaging",
    icon: faFlask,
    title: "Lab Test and Imaging",
    subItems: [
      { id: "Lab Test and Imaging", title: "Lab Test and Imaging", icon: faMicroscope, path: "/LabTestImaging" ,catid:Categories.LAB_TESTS_AND_IMAGING.catID},
    ],
  },
  {
    id: "Systemic EXamination",
    icon: faFolder,
    title: "Systemic EXamination",
    active: false,
    subItems: [
      { id: "General", title: "General", icon: faStethoscope, path: "/General",catid:Categories.GENERAL.catID },
      { id: " CVS", title: " CVS", icon: faHeart, path: "/CVS",catid:Categories.CVS.catID },
      { id: " RS", title: "RS", icon: faBrain, path: "/RS" ,catid:Categories.RS.catID},
      { id: "CNS", title: "CNS", icon: faBrain, path: "/CNS" ,catid:Categories.CNS.catID},
      { id: " PA", title: " PA", icon: faUserDoctor, path: "/PA" ,catid:Categories.PA.catID},
      { id: " ENT", title: "ENT", icon: faFaceMeh, path: "/ENT" ,catid:Categories.ENT.catID},
    ],
  },
  {
    id: "Obstetric History",
    icon: faPersonPregnant,
    title: "Obstetric History",
    active: false,
    subItems: [
      { id: "Pragnancy Outcomes", title: "Pragnancy Outcomes", icon: faPersonPregnant, path: "/PragnancyOutcomes",catid:Categories.PREGNANCY_OUTCOME.catID },
    ],
  },

   {
      id: "Investigation",
      icon: faSyringe,
      title: "Investigation",
      active: false,
     
      subItems: [
        {
          id: "Investigation",
          title: "Investigation",
          icon: faSyringe,
          path: "/Investigation",catid:Categories.INVESTIGATIONS.catID
        },
  
      ],
    },
  {
    id: "Test Requested",
    icon: faDroplet,
    title: "Test Requested",
    active: false,
    subItems: [
      { id: "Test Requested", title: "Test", icon: faDroplet, path: "/TestRequested",catid:Categories.TESTS_REQUESTED.catID },
    ],
  },
];


// --- End Menu Data ---

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const nav = useNavigate();
  const location = useLocation();
  const currentPath = location?.pathname;

  const [currentId, setCurrentId] = useState("MedicineAnalyst");
  const [expandedMenus, setExpandedMenus] = useState({ 0: true});
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
        scrollbarWidth:'none',
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

                                 if(subItem.catid){
                                localStorage.setItem("catagoryid",subItem.catid)
                              }
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