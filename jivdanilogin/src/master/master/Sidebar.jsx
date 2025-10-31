import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBed,
   faStethoscope,
  faFlask,
  faMicroscope,
  faPills,
  faHistory,
  faFolder,
  faTablets,
  faBalanceScale,
  faQuestion,
  faRepeat,
  faStopwatch,
  faBook,
  faAllergies,
  faNoteSticky,
  faFileMedical,
  faUsersLine,
  faBedPulse,
  faBriefcaseMedical,
  faHeart,
  faBrain,
  faUserDoctor,
  faFaceMeh,
  faSyringe,
  faDroplet,
  faPersonPregnant,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
// import { ROLE, ROLEDOCTOR, SUPER_ADNIM, USER_ROLE } from "../Constant";
import { useDispatch, useSelector } from "react-redux";

const menuItems = [
  {
    id: "Medication",
    icon: faHome,
    title: "Medication",
    path: "/",
    // active: true,
     subItems: [
      {
        id: "Medicine Analyst",
        title: "Medicine Analyst",
        icon: faPills,
        path: "/",
      },
      {
        id: "Dosage",
        title: "Dosage",
        icon: faTablets,
        path: "/dosage",
      },
      {
        id: "Units",
        title: "Units",
        icon: faBalanceScale,
        path: "/Units",
      },
       {
        id: "Whens",
        title: "Whens",
        icon: faQuestion,
        path: "/Whens",
      },
      {
        id: "Frequency",
        title: "Frequency",
        icon:faRepeat,
        path: "/Frequency",
      },
      {
        id: "Duration",
        title: "Duration",
        icon: faStopwatch,
        path: "/Duration",
      },
      {
        id: "Notes",
        title: "Notes",
        icon: faBook,
        path: "/Notes",
      },
    ],
  },
  {
    id: "History",
    icon: faHistory,
    title: "History",
    subItems: [
      {
        id: "Allergies",
        title: "Allergies",
        icon: faAllergies,
        path: "/Allergy",
      },

      {
        id: "Personal History",
        title: "Personal History",
        icon: faNoteSticky,
        path: "/PersonalHistory",
      },
      {
        id: "Past Medical History",
        title: "Past Medical History",
        icon: faFileMedical,
        path: "/PastMedicalHistory",
      },
      {
        id: "Family History",
        title: "Family History",
        icon: faUsersLine,
        path: "/FamilyHistory",
      },
    ],
  },

  {
    id: "Complaints",
    icon: faBed,
    title: "Complaints",
    subItems: [
      {
        id: "Complaints",
        title: "Complaints",
        icon: faBedPulse,
        path: "/Complaints",
      },
    
    ],
  },
  {
    id: "Diagnosis",
    icon: faBriefcaseMedical,
    title: "Diagnosis",
    subItems: [
      {
        id: "Diagnosis",
        title: "Diagnosis",
        icon: faBriefcaseMedical,
        path: "/Diagnosis",
      },

      {
        id: "Duration",
        title: "Duration",
        icon: faStopwatch,
        path: "/Duration",
      },
     
    ],
  },
  {
    id: "Lab Test and Imaging",
    icon: faFlask,
    title: "Lab Test and Imaging",
    subItems: [
      {
        id: "Lab Test and Imaging",
        title: "Lab Test and Imaging",
        icon: faMicroscope,
       
        path: "/LabTestImaging",
      },

    ],
  },
 
 
  {
    id: "Systemic EXamination",
    icon: faFolder,
    title: "Systemic EXamination",
    active: false,
   
    subItems: [
      {
        id: "General",
        title: "General",
        icon: faStethoscope,
        path: "/General",
      },
      {
        id: " CVS",
        title: " CVS",
        icon: faHeart,
        path: "/CVS",
      },
      {
        id: " RS",
        title: "RS",
        icon: faBrain,
        path: "/RS",
      },
            {
        id: "CNS",
        title: "CNS",
        icon: faBrain,
        path: "/CNS",
      },
      {
        id: " PA",
        title: " PA",
        icon: faUserDoctor,
        path: "/PA",
      },
      {
        id: " ENT",
        title: "ENT",
        icon: faFaceMeh,
        path: "/ENT",
      },

    ],
  },
    {
    id: "Obstetric History",
    icon: faPersonPregnant,
    title: "Obstetric History",
    active: false,
   
    subItems: [
      {
        id: "Pragnancy Outcomes",
        title: "Pragnancy Outcomes",
        icon: faPersonPregnant,
        path: "/PragnancyOutcome",
      },

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
        path: "/Investigation",
      },

    ],
  },
  
     {
    id: "Test Requested",
    icon: faDroplet,
    title: "Test Requested",
    active: false,
   
    subItems: [
      {
        id: "Test Requested",
        title: "Test",
        icon: faDroplet,
        path: "/TestRequested",
      },

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

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const nav = useNavigate();
  const location = useLocation();
  const currentPath = location?.pathname;

  const [currentId, setCurrentId] = useState("dashboard");
  const [expandedMenus, setExpandedMenus] = useState({});
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredSubItem, setHoveredSubItem] = useState(null);

  const [MenuList, setMenuList] = useState(menuItems);
  const [userRoles, setUserRoles] = useState(null);
  const [userDoctor, setuserDoctor] = useState(false);

  const dispatch = useDispatch();
  const { user, role } = useSelector((state) => state.user);

  useEffect(() => {
    try {
      setUserRoles(role);

      if (role?.includes(ROLE) || role?.includes(SUPER_ADNIM)) {
        setMenuList(menuItems);
      } else if (role?.includes(ROLEDOCTOR)) {
        setuserDoctor(true);
        setMenuList(DoctorItems);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    const findActiveMenuItem = (path) => {
      for (let item of MenuList) {
        if (item.path === path) {
          setCurrentId(item.id);
          return;
        }
        if (item.subItems) {
          for (let subItem of item.subItems) {
            if (subItem.path === path) {
              setCurrentId(subItem.id);
              return;
            }
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
      }}
      onMouseEnter={() => setSidebarOpen(true)}
      onMouseLeave={() => setSidebarOpen(false)}
    >
      {/* Menu Items */}
      <div className="py-2 mb-5">
        {
          // menuItems
          MenuList.map((item, index) => {
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
                      style={{
                        fontSize: "1rem",
                        transition: "color 0.3s ease",
                        width: "16px",
                      }}
                    />
                    {sidebarOpen && (
                      <span
                        className="fw-medium ms-3"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {item.title}
                      </span>
                    )}
                  </div>

                  {/* Arrow for expandable items */}
                  {sidebarOpen && item.subItems.length > 0 && (
                    <span
                      className="ms-2  d-none d-lg-block"
                      style={{
                        transform: expandedMenus[index]
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                        fontSize: "0.7rem",
                      }}
                    >
                      ▼
                    </span>
                  )}
                </div>

                {/* Sub Items */}
                {sidebarOpen &&
                  item.subItems &&
                  item.subItems.length > 0 &&
                  expandedMenus[index] && (
                    <div
                      className="ms-3 mt-1"
                      style={{
                        animation: "slideDown 0.3s ease",
                        overflow: "hidden",
                      }}
                    >
                      {item.subItems.map((subItem, subIndex) => {
                        const isActiveSubItem = subItem?.id === currentId;
                        const isSubHovered =
                          hoveredSubItem === `sub-${index}-${subIndex}`;

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
                                nav(subItem?.path);
                              }
                            }}
                            onMouseEnter={() =>
                              setHoveredSubItem(`sub-${index}-${subIndex}`)
                            }
                            onMouseLeave={() => setHoveredSubItem(null)}
                          >
                            <FontAwesomeIcon
                              icon={subItem.icon}
                              className={`me-2
                              ${
                                isActiveSubItem
                                  ? "text-primary"
                                  : isSubHovered
                                  ? "text-primary"
                                  : "text-muted"
                              }`}
                              style={{
                                fontSize: "0.85rem",
                                transition: "color 0.3s ease",
                                width: "14px",
                              }}
                            />
                            <span
                              className={
                                isActiveSubItem ? "fw-semibold" : "fw-normal"
                              }
                            >
                              {subItem.title}
                            </span>
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

      {/* Custom CSS for animations */}
      {/* <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            max-height: 500px;
            transform: translateY(0);
          }
        }

        .cursor-pointer {
          cursor: pointer;
        }

        .sidebar::-webkit-scrollbar {
          width: 4px;
        }

        .sidebar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        .sidebar::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 2px;
        }

        .sidebar::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}</style> */}
    </div>
  );
}
