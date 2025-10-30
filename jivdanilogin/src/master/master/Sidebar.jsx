import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faFileText,
  faClipboard,
  faCalendarDays,
  faChartBar,
  faHospital,
  faUser,
  faBed,
  faDollarSign,
  faCreditCard,
  faFileAlt,
  faDoorOpen,
  faExchangeAlt,
  faUserMd,
  faUserGroup,
  faCity,
  faBuilding,
  faHandshake,
  faShield,
  faUserNurse,
  faClock,
  faList,
  faStethoscope,
  faFlask,
  faMicroscope,
  faVial,
  faFileContract,
  faMoneyBill,
  faReceipt,
  faUniversity,
  faChartLine,
  faCalendar,
  faCalendarAlt,
  faChartPie,
  faCog,
  faUserCog,
  faWrench,
  faSave,
  faLock,
  faBuildingShield,
  faClockFour,
  faUserTie,
  faBullhorn,
  faDatabase,
  faPills,
  faHistory,
  faCommentMedical,
  faSearch,
  faDiagnoses,
  faL,
  faXRay,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
// import { ROLE, ROLEDOCTOR, SUPER_ADNIM, USER_ROLE } from "../Constant";
import { useDispatch, useSelector } from "react-redux";

const menuItems = [
  {
    id: "Medication",
    icon: faHome,
    title: "Medication",
    // path: "/dashboard/home",
    // active: true,
     subItems: [
      {
        id: "Medicine Analyst",
        title: "Medicine Analyst",
        icon: faFileText,
        path: "/dashboard/createToken",
      },
      {
        id: "Dosage",
        title: "Dosage",
        icon: faCalendarDays,
        path: "/dashboard/tokenbooking",
      },
      {
        id: "Units",
        title: "Units",
        icon: faChartBar,
        path: "/dashboard/myTokenHistory",
      },
       {
        id: "Whens",
        title: "Whens",
        icon: faFileText,
        path: "/dashboard/createToken",
      },
      {
        id: "Frequency",
        title: "Frequency",
        icon: faCalendarDays,
        path: "/dashboard/tokenbooking",
      },
      {
        id: "Duration",
        title: "Duration",
        icon: faChartBar,
        path: "/dashboard/myTokenHistory",
      },
      {
        id: "Notes",
        title: "Notes",
        icon: faChartBar,
        path: "/dashboard/myTokenHistory",
      },
    ],
  },
  {
    id: "History",
    icon: faUsers,
    title: "History",
    subItems: [
      {
        id: "Allergies",
        title: "Allergies",
        icon: faFileText,
        path: "/dashboard/createToken",
      },

      {
        id: "Personal History",
        title: "Personal History",
        icon: faCalendarDays,
        path: "/dashboard/tokenbooking",
      },
      {
        id: "Past Medical History",
        title: "Past Medical History",
        icon: faChartBar,
        path: "/dashboard/myTokenHistory",
      },
      {
        id: "Family History",
        title: "Family History",
        icon: faChartBar,
        path: "/dashboard/myTokenHistory",
      },
    ],
  },

  {
    id: "ipdManagement",
    icon: faHospital,
    title: "IPD Management",
    subItems: [
      {
        id: "bedStatus",
        title: "Bed Status",
        icon: faBed,
        path: "/dashboard/bed-status",
      },
      {
        id: "ipdBill",
        title: "IPD Bill",
        icon: faDollarSign,
        path: "/dashboard/ipd-billing",
      },
      {
        id: "paymentDeposit",
        title: "Payment & Deposit",
        icon: faCreditCard,
        path: "/dashboard/payment-deposit",
      },
      {
        id: "dischargeSummary",
        title: "Discharge Summary",
        icon: faFileAlt,
        path: "/dashboard/discharge-summary",
      },
      {
        id: "wardRoom",
        title: "Ward Room",
        icon: faDoorOpen,
        path: "/dashboard/ward-rooms",
      },
      {
        id: "wardTransfer",
        title: "Ward Transfer",
        icon: faExchangeAlt,
        path: "/dashboard/ward-transfer",
      },
      {
        id: "serviceHead",
        title: "Service",
        icon: faUserMd,
        path: "/dashboard/service",
      },
      {
        id: "serviceGroup",
        title: "Service Group",
        icon: faUserGroup,
        path: "/dashboard/service-group",
      },
      {
        id: "city",
        title: "City",
        icon: faCity,
        path: "/dashboard/city",
      },
      {
        id: "organization",
        title: "Organization",
        icon: faBuilding,
        path: "/dashboard/organization",
      },
      {
        id: "tpa",
        title: "TPA",
        icon: faHandshake,
        path: "/dashboard/tpa",
      },
      {
        id: "insuranceCompany",
        title: "Insurance Company",
        icon: faShield,
        path: "/dashboard/insurance-comp",
      },
    ],
  },
  {
    id: "opdManagement",
    icon: faUserNurse,
    title: "OPD Management",
    subItems: [
      {
        id: "OPDBill",
        title: "OPD Bill",
        icon: faDollarSign,
        path: "/dashboard/OPD-Billing",
      },

      {
        id: "opt_token",
        title: "OPD Tokens",
        icon: faClock,
        path: "/dashboard/tokenPage",
      },
      // {
      //   id: "queueManagement",
      //   title: "Queue Management",
      //   icon: faList,
      //   // path: "/dashboard/queue-management",
      //   path: "",
      // },
      // {
      //   id: "consultation",
      //   title: "Consultation",
      //   icon: faStethoscope,
      //   // path: "/dashboard/consultation",
      //   path: "",
      // },
    ],
  },
  {
    id: "laboratory",
    icon: faFlask,
    title: "Laboratory",
    subItems: [
      {
        id: "Lab-ServiceHead",
        title: "Lab Category",
        icon: faMicroscope,
        // path: "/dashboard/lab-tests",
        path: "/dashboard/Lab-ServiceHead",
      },

      {
        id: "Pathology",
        title: "Pathology",
        icon: faFlask,
        // path: "/dashboard/lab-tests",
        path: "/dashboard/Pathology",
      },

      {
        id: "Radiology",
        title: "Radiology",
        icon: faXRay,
        // path: "/dashboard/lab-tests",
        path: "/dashboard/Readiology",
      },
      {
        id: "labTest",
        title: "Test Reports",
        icon: faChartBar,
        path: "/dashboard/myTokenHistory",
      },

      // {
      //   id: "labReports",
      //   title: "Lab Reports",
      //   icon: faFileContract,
      //   //path: "/dashboard/lab-reports",
      //   path: "/dashboard/myTokenHistory",
      // },
    ],
  },
  // {
  //   id: "billingFinance",
  //   icon: faMoneyBill,
  //   title: "Billing & Finance",
  //   subItems: [
  //     {
  //       id: "patientBilling",
  //       title: "Patient Billing",
  //       icon: faReceipt,
  //       path: "/dashboard/OPD-Billing",
  //     },
  //     {
  //       id: "paymentCollection",
  //       title: "Payment Collection",
  //       icon: faCreditCard,
  //       // path: "/dashboard/payment-collection",
  //       path: "",
  //     },
  //     {
  //       id: "insuranceClaims",
  //       title: "Insurance Claims",
  //       icon: faUniversity,
  //       //path: "/dashboard/insurance-claims",
  //       path: "",
  //     },
  //     {
  //       id: "financialReports",
  //       title: "Financial Reports",
  //       icon: faChartLine,
  //       //path: "/dashboard/financial-reports",
  //       path: "",
  //     },
  //   ],
  // },
  // {
  //   id: "staffManagement",
  //   icon: faUserTie,
  //   title: "Staff Management",

  //   subItems: [
  //     {
  //       id: "manageStaff",
  //       title: "Hospital Staff",
  //       icon: faUsers,
  //       path: "/dashboard/manage-Employee",
  //     },
  //     {
  //       id: "dailyattendance",
  //       title: "Daily Attendance",
  //       icon: faUsers,
  //       path: "/dashboard/attendance",
  //     },

  //     {
  //       id: "attendanceReport",
  //       title: "Attendance Report",
  //       icon: faClockFour,
  //       path: "/dashboard/generate-Report",
  //     },
  //     {
  //       id: "shiftDepartment",
  //       title: "Shift & Department",
  //       icon: faBuildingShield,
  //       path: "/dashboard/shift-Department",
  //     },

  //   ],
  // },

  // {
  //   id: "advertisement",
  //   icon: faBullhorn,
  //   title: "Advertisement",
  //   path: "/dashboard/advertisement-Form",
  //   active: true,
  //   subItems: [],
  // },
  // {
  //   id: "allMaster",
  //   icon: faDatabase,
  //   title: "All Master",
  //   active: true,
  //   subItems: [],

  //   // subItems: [
  //   //   {
  //   //     id: "medicine",
  //   //     title: "Medicine",
  //   //     icon: faPills,
  //   //     // path: "/dashboard/medicine",
  //   //     path: "",
  //   //   },
  //   //   {
  //   //     id: "diagnosis",
  //   //     title: "Diagnosis",
  //   //     icon: faDiagnoses,
  //   //     path: "/dashboard/diagnosis",
  //   //   },
  //   //   {
  //   //     id: "history",
  //   //     title: "History",
  //   //     icon: faHistory,
  //   //     path: "/dashboard/history",
  //   //   },
  //   //   {
  //   //     id: "complaints",
  //   //     title: "Complaints",
  //   //     icon: faCommentMedical,
  //   //     path: "/dashboard/complaints",
  //   //   },
  //   //   {
  //   //     id: "investigations",
  //   //     title: "Investigations",
  //   //     icon: faSearch,
  //   //     path: "/dashboard/investigations",
  //   //   },
  //   // ],
  // },
  {
    id: "reports",
    icon: faChartBar,
    title: "Reports",
    path: "/dashboard/dailyReport",
    active: true,
    subItems: [],
  },
  {
    id: "MISReport",
    icon: faFolder,
    title: "MIS Report",
    active: false,
    subItems: [],
    subItems: [
      {
        id: "PtRegistrationAndDischargeWise",
        title: "Pt.Reg & DischargeWise",
        icon: faFolder,
        path: "/dashboard/PtRegistrationAndDischargeWise",
      },
      {
        id: " MisOutStandingWise",
        title: " MIS Out Standing Wise",
        icon: faFolder,
        path: "/dashboard/MisOutStandingWise",
      },
      {
        id: " MisCollection",
        title: " MIS Collection",
        icon: faFolder,
        path: "/dashboard/MisCollection",
      },
      // {
      //   id: "backupRestore",
      //   title: "Backup & Restore",
      //   icon: faSave,
      //   path: "/dashboard/backup-restore",
      // },
      // {
      //   id: "security",
      //   title: "Security",
      //   icon: faLock,
      //   path: "/dashboard/security",
      // },
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
