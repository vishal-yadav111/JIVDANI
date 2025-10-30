


import React, { useState } from "react";

import { Color } from "../../visitConstant/Color";
import Categories from "../../visitConstant/Categories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAllergies,
  faBalanceScale,
  faBed,
  faBedPulse,
  faBook,
  faBrain,
  faBriefcaseMedical,
  faDroplet,
  faFileMedical,
  faHeart,
  faHistory,
  faNoteSticky,
  faPersonPregnant,
  faPills,
  faQuestion,
  faRepeat,
  faStopwatch,
  faStethoscope,
  faSyringe,
  faUsersLine,
  faVial,
  faFaceMeh,
  faUserDoctor,
  faTablets,
} from "@fortawesome/free-solid-svg-icons";

const MasterSideBar = ({ handleSideBar }) => {
  const [activeItemId, setActiveItemId] = useState(Categories.MEDICINE.catID);


  const handleItemClick = (id) => {
    setActiveItemId(id);
    handleSideBar(id);
  };

  // ---- SECTION DATA ----
  const sections = [
    {
      title: "Medication",
      icon: faPills,
      items: [
        { name: "Medicine Analyst", id: Categories.MEDICINE.catID, icon: faPills },
        { name: "Dosage", id: Categories.DOSAGE.catID, icon: faTablets },
        { name: "Units", id: Categories.UNITS.catID, icon: faBalanceScale },
        { name: "Whens", id: Categories.WHENS.catID, icon: faQuestion },
        { name: "Frequency", id: Categories.FREQUENCY.catID, icon: faRepeat },
        { name: "Duration", id: Categories.DURATION.catID, icon: faStopwatch },
        { name: "Notes", id: Categories.NOTE.catID, icon: faBook },
      ],
    },
    {
      title: "History",
      icon: faHistory,
      items: [
        { name: "Allergies", id: Categories.ALLERGIES.catID, icon: faAllergies },
        { name: "Personal History", id: Categories.PERSONAL_HISTORY.catID, icon: faNoteSticky },
        { name: "Past Medical History", id: Categories.PAST_MEDICAL_HISTORY.catID, icon: faFileMedical },
        { name: "Family History", id: Categories.FAMILY_HISTORY.catID, icon: faUsersLine },
      ],
    },
    {
      title: "Complaints",
      icon: faBed,
      items: [{ name: "Complaints", id: Categories.COMPLAINTS.catID, icon: faBedPulse }],
    },
    {
      title: "Diagnosis",
      icon: faBriefcaseMedical,
      items: [
        { name: "Diagnosis", id: Categories.DIAGNOSIS.catID, icon: faBriefcaseMedical },
        { name: "Duration", id: Categories.DURATION.catID, icon: faStopwatch },
      ],
    },
    {
      title: "Lab Test and Imaging",
      icon: faVial,
      items: [{ name: "Lab Test And Imaging", id: Categories.LAB_TESTS_AND_IMAGING.catID, icon: faVial }],
    },
    {
      title: "Test Requested",
      icon: faDroplet,
      items: [{ name: "Test Requested", id: Categories.TESTS_REQUESTED.catID, icon: faDroplet }],
    },
    {
      title: "Systemic Examination",
      icon: faStethoscope,
      items: [
        { name: "CVS", id: Categories.CVS.catID, icon: faHeart },
        { name: "RS", id: Categories.RS.catID, icon: faBrain },
        { name: "CNS", id: Categories.CNS.catID, icon: faBrain },
        { name: "PA", id: Categories.PA.catID, icon: faUserDoctor },
        { name: "ENT", id: Categories.ENT.catID, icon: faFaceMeh },
      ],
    },
    {
      title: "Investigation",
      icon: faSyringe,
      items: [{ name: "Investigation", id: Categories.INVESTIGATIONS.catID, icon: faSyringe }],
    },
    {
      title: "Obstetric History",
      icon: faPersonPregnant,
      items: [{ name: "Pregnancy Outcomes", id: Categories.PREGNANCY_OUTCOME.catID, icon: faPersonPregnant }],
    },
  ];

  // ---- COMPONENT ----
  return (

    

    <div className="row g-3">
      {sections.map((section, index) => (
        <div className="dropdown w-100" key={index}>
          {/* Dropdown Button */}
          <button
            className="btn btn-light dropdown-toggle w-100 d-flex align-items-center justify-content-between"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span
              style={{
                color:
                  section.items.some((i) => i.id === activeItemId)
                    ? Color.primary
                    : Color.black,
              }}
            >
              <FontAwesomeIcon
                icon={section.icon}
                className="px-2 fs-5"
                style={{
                  cursor: "pointer",
                  color:
                    section.items.some((i) => i.id === activeItemId)
                      ? Color.primary
                      : Color.graydark,
                }}
              />{" "}
              {section.title}
            </span>
          </button>

          {/* Dropdown Items */}
          <ul className="dropdown-menu w-100" style={{ border: "0px" }}>
            {section.items.map((item, iIndex) => (
              <li key={iIndex}>
                <div
                  className="d-flex align-items-center text-center gap-2 px-3 mx-3 p-2"
                  onClick={() => handleItemClick(item.id)}
                  style={{
                    border: "2px solid white",
                    borderRadius: "10px",
                    borderLeft: "3px solid lightgray",
                  }}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="fs-5"
                    style={{
                      cursor: "pointer",
                      color:
                        activeItemId === item.id
                          ? Color.primary
                          : Color.graydark,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: "bold",
                      cursor: "pointer",
                      color:
                        activeItemId === item.id
                          ? Color.primary
                          : Color.graydark,
                    }}
                  >
                    {item.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MasterSideBar;






// import React, { useState } from "react";

// import { Color } from "../../visitConstant/Color";
// import Categories from "../../visitConstant/Categories";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faAllergies,
//   faBalanceScale,
//   faBed,
//   faBedPulse,
//   faBook,
//   faBrain,
//   faBriefcaseMedical,
//   faDroplet,
//   faFileMedical,
//   faHeart,
//   faHistory,
//   faNoteSticky,
//   faPersonPregnant,
//   faPills,
//   faQuestion,
//   faRepeat,
//   faStopwatch,
//   faStethoscope,
//   faSyringe,
//   faUsersLine,
//   faVial,
//   faFaceMeh,
//   faUserDoctor,
//   faTablets,
// } from "@fortawesome/free-solid-svg-icons";

// const MasterSideBar = ({handleSideBar, sidebarOpen, setSidebarOpen  }) => {
//   const [activeItemId, setActiveItemId] = useState(Categories.MEDICINE.catID);


//   const handleItemClick = (id) => {
//     setActiveItemId(id);
//     handleSideBar(id);
//   };

//   // ---- SECTION DATA ----
//   const sections = [
//     {
//       title: "Medication",
//       icon: faPills,
//       items: [
//         { name: "Medicine Analyst", id: Categories.MEDICINE.catID, icon: faPills },
//         { name: "Dosage", id: Categories.DOSAGE.catID, icon: faTablets },
//         { name: "Units", id: Categories.UNITS.catID, icon: faBalanceScale },
//         { name: "Whens", id: Categories.WHENS.catID, icon: faQuestion },
//         { name: "Frequency", id: Categories.FREQUENCY.catID, icon: faRepeat },
//         { name: "Duration", id: Categories.DURATION.catID, icon: faStopwatch },
//         { name: "Notes", id: Categories.NOTE.catID, icon: faBook },
//       ],
//     },
//     {
//       title: "History",
//       icon: faHistory,
//       items: [
//         { name: "Allergies", id: Categories.ALLERGIES.catID, icon: faAllergies },
//         { name: "Personal History", id: Categories.PERSONAL_HISTORY.catID, icon: faNoteSticky },
//         { name: "Past Medical History", id: Categories.PAST_MEDICAL_HISTORY.catID, icon: faFileMedical },
//         { name: "Family History", id: Categories.FAMILY_HISTORY.catID, icon: faUsersLine },
//       ],
//     },
//     {
//       title: "Complaints",
//       icon: faBed,
//       items: [{ name: "Complaints", id: Categories.COMPLAINTS.catID, icon: faBedPulse }],
//     },
//     {
//       title: "Diagnosis",
//       icon: faBriefcaseMedical,
//       items: [
//         { name: "Diagnosis", id: Categories.DIAGNOSIS.catID, icon: faBriefcaseMedical },
//         { name: "Duration", id: Categories.DURATION.catID, icon: faStopwatch },
//       ],
//     },
//     {
//       title: "Lab Test and Imaging",
//       icon: faVial,
//       items: [{ name: "Lab Test And Imaging", id: Categories.LAB_TESTS_AND_IMAGING.catID, icon: faVial }],
//     },
//     {
//       title: "Test Requested",
//       icon: faDroplet,
//       items: [{ name: "Test Requested", id: Categories.TESTS_REQUESTED.catID, icon: faDroplet }],
//     },
//     {
//       title: "Systemic Examination",
//       icon: faStethoscope,
//       items: [
//         { name: "CVS", id: Categories.CVS.catID, icon: faHeart },
//         { name: "RS", id: Categories.RS.catID, icon: faBrain },
//         { name: "CNS", id: Categories.CNS.catID, icon: faBrain },
//         { name: "PA", id: Categories.PA.catID, icon: faUserDoctor },
//         { name: "ENT", id: Categories.ENT.catID, icon: faFaceMeh },
//       ],
//     },
//     {
//       title: "Investigation",
//       icon: faSyringe,
//       items: [{ name: "Investigation", id: Categories.INVESTIGATIONS.catID, icon: faSyringe }],
//     },
//     {
//       title: "Obstetric History",
//       icon: faPersonPregnant,
//       items: [{ name: "Pregnancy Outcomes", id: Categories.PREGNANCY_OUTCOME.catID, icon: faPersonPregnant }],
//     },
//   ];

//   // ---- COMPONENT ----
//   return (    <div
//       className={`sidebar position-fixed h-100 pb-4 bg-white border-end shadow-sm ${
//         sidebarOpen ? "sidebar-open" : "sidebar-closed"
//       }`}
//       style={{
//         width: sidebarOpen ? "280px" : "70px",
//         zIndex: 1000,
//         transition: "all 0.3s ease",
//         overflowY: "auto",
//         overflowX: "hidden",
//       }}
//       onMouseEnter={() => setSidebarOpen(true)}
//       onMouseLeave={() => setSidebarOpen(false)}
//     >
      

    

//     <div className="row py-2 mb-5">
//       {sections.map((section, index) => (
//         <div className="dropdown w-100" key={index}>
//           {/* Dropdown Button */}
//           <button
//             className="btn btn-light dropdown-toggle w-100 d-flex align-items-center justify-content-between"
//             type="button"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             <span
//               style={{
//                 color:
//                   section.items.some((i) => i.id === activeItemId)
//                     ? Color.primary
//                     : Color.black,
//               }}
//             >
//               <FontAwesomeIcon
//                 icon={section.icon}
//                 className="px-2 fs-5"
//                 style={{
//                   cursor: "pointer",
//                   color:
//                     section.items.some((i) => i.id === activeItemId)
//                       ? Color.primary
//                       : Color.graydark,
//                 }}
//               />{" "}
//               {section.title}
//             </span>
//           </button>

//           {/* Dropdown Items */}
//           <ul className="dropdown-menu w-100" style={{ border: "0px" }}>
//             {section.items.map((item, iIndex) => (
//               <li key={iIndex}>
//                 <div
//                   className="d-flex align-items-center text-center gap-2 px-3 mx-3 p-2"
//                   onClick={() => handleItemClick(item.id)}
//                   style={{
//                     border: "2px solid white",
//                     borderRadius: "10px",
//                     borderLeft: "3px solid lightgray",
//                   }}
//                 >
//                   <FontAwesomeIcon
//                     icon={item.icon}
//                     className="fs-5"
//                     style={{
//                       cursor: "pointer",
//                       color:
//                         activeItemId === item.id
//                           ? Color.primary
//                           : Color.graydark,
//                     }}
//                   />
//                   <span
//                     style={{
//                       fontSize: 13,
//                       fontWeight: "bold",
//                       cursor: "pointer",
//                       color:
//                         activeItemId === item.id
//                           ? Color.primary
//                           : Color.graydark,
//                     }}
//                   >
//                     {item.name}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default MasterSideBar;
