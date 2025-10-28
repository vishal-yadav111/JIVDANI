// /* eslint-disable no-unused-vars */
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Color } from "../../visitConstant/Color";


// import Categories from "../../visitConstant/Categories";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAllergies, faBalanceScale, faBed, faBedPulse, faBook, faBrain, faBriefcaseMedical, faDroplet, faFaceDizzy, faFaceFrown, faFaceMeh, faFaceRollingEyes, faFaceSurprise, faFemale, faFileMedical, faFlaskVial, faHeart, faHistory, faNotesMedical, faNoteSticky, faPersonPregnant, faPersonRunning, faPills, faQuestion, faRepeat, faStethoscope, faStopwatch, faSyringe, faTable, faTablet, faTablets, faUserDoctor, faUserGroup, faUserMd, faUsersLine, faVial, faXRay } from "@fortawesome/free-solid-svg-icons";
// import { FaBook, FaBriefcaseMedical, FaItunesNote } from "react-icons/fa";

// const MasterSideBar = ({ handleSideBar }) => {
//   const [activeItemId, setActiveItemId] = useState(Categories.MEDICINE.catID); // Use IDs for tracking active state
//   const navigate = useNavigate();

//   // Function to handle item clicks and set the active ID
//   const handleItemClick = (id) => {
//     setActiveItemId(id); // Set the clicked item's ID as active
//     handleSideBar(id);
//   };

//   return (
//     <>



    
     



//       <div className="row g-3 ">
//         {/* Medicine Analyst */}
//  <div className="dropdown w-100" style={{}}>
//   <button className="btn btn-light dropdown-toggle w-100 d-flex align-items-center justify-content-between" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width:'100%'}}>
//     <span style={{ color:
//                 activeItemId === Categories.MEDICINE.catID
//                   ? Color.primary
//                   : Color.black,}}>
//         <FontAwesomeIcon
//             // icon="fa-solid fa-pills"
//             icon={faPills}
//             className="px-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.MEDICINE.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           /> Medication</span>
//   </button>
//   <ul className="dropdown-menu w-100 " style={{border:'0px'}} >
//     <li><div
//           className="d-flex  align-items-center text-center gap-2 px-3 mx-3 p-2"
//           onClick={() => handleItemClick(Categories.MEDICINE.catID)}
//            style={{border:'2px solid white',borderRadius:'10px', borderLeft:'3px solid lightgray'}}
//         >
//           <FontAwesomeIcon
//             // icon="fa-solid fa-pills"
//             icon={faPills}
//             className=" fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.MEDICINE.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           />

//           <span
//             style={{
//               fontSize: 12,
//               fontWeight: "bolder",
//               color:
//                 activeItemId === Categories.MEDICINE.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           >
//             Medicine  Analyst
//           </span>
//         </div></li>
//     <li><div
//           className="d-flex  align-items-center text-center gap-2  px-3 mx-3 p-1"
//           onClick={() => handleItemClick(Categories.DOSAGE.catID)}
//            style={{border:'2px solid white',borderRadius:'8px', borderLeft:'3px solid lightgray'}}
//         >
//           <FontAwesomeIcon
//             // icon="fa-solid fa-bed-pulse"
//             icon={faTablets}
//             className="mb-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.DOSAGE.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           />
//           <span
//             style={{
//               fontSize: 12,
//               fontWeight: "bold",
//               color: activeItemId === Categories.DOSAGE.catID ? Color.primary : Color.graydark, // Color changes based on activeItemId
//             }}
//           >
//              Dosage

//           </span>
//         </div>
// </li>
//     <li><div
//           className="d-flex  align-items-center text-center gap-2 px-3 mx-3 p-1"
//           onClick={() => handleItemClick(Categories.UNITS.catID)}
//            style={{border:'2px solid white',borderRadius:'8px', borderLeft:'3px solid lightgray'}}
//         >
//           <FontAwesomeIcon
//             // icon="fa-solid fa-bed-pulse"
//             icon={faBalanceScale}
//             className="mb-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.UNITS.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           />
//           <span
//             style={{
//               fontSize: 12,
//               fontWeight: "bold",
//               color: activeItemId === Categories.UNITS.catID ? Color.primary : Color.graydark, // Color changes based on activeItemId
//             }}
//           >
//             Units

//           </span>
//         </div>
        
//         </li>
//         <li>  


          
//                      <div
//           className="d-flex align-items-center text-center gap-2 px-3 mx-3 p-1"
//           onClick={() => handleItemClick(Categories.WHENS.catID)}
//            style={{border:'2px solid white',borderRadius:'8px', borderLeft:'3px solid lightgray'}}
//         >
//           <FontAwesomeIcon
//             // icon="fa-solid fa-bed-pulse"
//             icon={faQuestion}
//             className="mb-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.WHENS.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           />
//           <span
//             style={{
//               fontSize: 12,
//               fontWeight: "bold",
//               color: activeItemId === Categories.WHENS.catID ? Color.primary : Color.graydark, // Color changes based on activeItemId
//             }}
//           >
//             Whens

//           </span>
//         </div></li>
// <li>
//                <div
//           className="d-flex align-items-center text-center gap-2 px-3 mx-3 p-1 "
//           onClick={() => handleItemClick(Categories.FREQUENCY.catID)}
//            style={{border:'2px solid white',borderRadius:'8px', borderLeft:'3px solid lightgray'}}
//         >
//           <FontAwesomeIcon
//             // icon="fa-solid fa-bed-pulse"
//             icon={faRepeat}
//             className="mb-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.FREQUENCY.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           />
//           <span
//             style={{
//               fontSize: 12,
//               fontWeight: "bold",
//               color: activeItemId === Categories.FREQUENCY.catID ? Color.primary : Color.graydark, // Color changes based on activeItemId
//             }}
//           >
//             Frequency

//           </span>
//         </div></li>
// <li>
        
//                <div
//           className="d-flex  align-items-center text-center gap-2 px-3 mx-3 p-1"
//           onClick={() => handleItemClick(Categories.DURATION.catID)}
//            style={{border:'2px solid white',borderRadius:'8px', borderLeft:'3px solid lightgray'}}
//         >
//           <FontAwesomeIcon
//             // icon="fa-solid fa-bed-pulse"
//             icon={faStopwatch}
//             className="mb-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.DURATION.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           />
//           <span
//             style={{
//               fontSize: 12,
//               fontWeight: "bold",
//               color: activeItemId === Categories.DURATION.catID ? Color.primary : Color.graydark, // Color changes based on activeItemId
//             }}
//           >
//             Duration

//           </span>
//         </div></li>
// <li>
//               <div
//           className="d-flex  align-items-center text-center gap-2 px-3 mx-3 p-1"
//           onClick={() => handleItemClick(Categories.NOTE.catID)}
//            style={{border:'2px solid white',borderRadius:'8px', borderLeft:'3px solid lightgray'}}
//         >
//           <FontAwesomeIcon
//             // icon="fa-solid fa-bed-pulse"
//             icon={faBook}
//             className="mb-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.NOTE.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           />
//           <span
//             style={{
//               fontSize: 12,
//               fontWeight: "bold",
//               color: activeItemId === Categories.NOTE.catID ? Color.primary : Color.graydark, // Color changes based on activeItemId
//             }}
//           >
//             Notes

//           </span>
//         </div>
//         </li>
//   </ul>
// </div>





// <div className="dropdown w-100" style={{}}>
//   <button className="btn btn-light dropdown-toggle w-100 d-flex align-items-center justify-content-between" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width:'100%'}}>
//     <span style={{ color:
//                 activeItemId === Categories.MEDICINE.catID
//                   ? Color.primary
//                   : Color.black,}}>
//         <FontAwesomeIcon
//             // icon="fa-solid fa-pills"
//             icon={faHistory}
//             className="px-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.MEDICINE.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           /> History</span>
//   </button>
//   <ul className="dropdown-menu w-100 " style={{border:'0px'}} >

//          <div
//           className="d-flex  align-items-center text-center gap-2 px-3 mx-3 p-1"
//            style={{border:'2px solid white',borderRadius:'8px', borderLeft:'3px solid lightgray'}}
//           onClick={() => handleItemClick(Categories.ALLERGIES.catID)}
//         >
//           <FontAwesomeIcon
//             // icon="fa-solid fa-bed-pulse"
//             icon={faAllergies}
//             className="mb-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.ALLERGIES.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           />
//           <span
//             style={{
//               fontSize: 12,
//               fontWeight: "bold",
//               color: activeItemId === Categories.ALLERGIES.catID ? Color.primary : Color.graydark, // Color changes based on activeItemId
//             }}
//           >
//             Allergies

//           </span>
//         </div>

        
//          <div
//           className="d-flex  align-items-center text-center gap-2 px-3 mx-3 p-1"
//            style={{border:'2px solid white',borderRadius:'8px', borderLeft:'3px solid lightgray'}}
//           onClick={() => handleItemClick(Categories.PERSONAL_HISTORY.catID)}
//         >
//           <FontAwesomeIcon
//             // icon="fa-solid fa-bed-pulse"
//             icon={faNoteSticky}
//             className="mb-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.PERSONAL_HISTORY.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           />
//           <span
//             style={{
//               fontSize: 12,
//               fontWeight: "bold",
//               color: activeItemId === Categories.PERSONAL_HISTORY.catID ? Color.primary : Color.graydark, // Color changes based on activeItemId
//             }}
//           >
//             Personal History

//           </span>
//         </div>

              
//          <div
//           className="d-flex  align-items-center text-center gap-2 px-3 mx-3 p-1"
//            style={{border:'2px solid white',borderRadius:'8px', borderLeft:'3px solid lightgray'}}
//           onClick={() => handleItemClick(Categories.PAST_MEDICAL_HISTORY.catID)}
//         >
//           <FontAwesomeIcon
//             // icon="fa-solid fa-bed-pulse"
//             icon={faFileMedical}
//             className="mb-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.PAST_MEDICAL_HISTORY.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           />
//           <span
//             style={{
//               fontSize: 12,
//               fontWeight: "bold",
//               color: activeItemId === Categories.PAST_MEDICAL_HISTORY.catID ? Color.primary : Color.graydark, // Color changes based on activeItemId
//             }}
//           >
//              Past Medical History

//           </span>
//         </div>

//         <div
//           className="d-flex  align-items-center text-center gap-2 px-3 mx-3 p-1"
//            style={{border:'2px solid white',borderRadius:'8px', borderLeft:'3px solid lightgray'}}
//           onClick={() => handleItemClick(Categories.FAMILY_HISTORY.catID)}
//         >
//           <FontAwesomeIcon
//             // icon="fa-solid fa-bed-pulse"
//             icon={faUsersLine}
//             className="mb-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.FAMILY_HISTORY.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           />
//           <span
//             style={{
//               fontSize: 12,
//               fontWeight: "bold",
//               color: activeItemId === Categories.FAMILY_HISTORY.catID ? Color.primary : Color.graydark, // Color changes based on activeItemId
//             }}
//           >
//              Family History

//           </span>
//         </div>
//   </ul>
// </div>



// <div className="dropdown w-100" style={{}}>
//   <button className="btn btn-light dropdown-toggle w-100 d-flex align-items-center justify-content-between" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width:'100%'}}>
//     <span style={{ color:
//                 activeItemId === Categories.MEDICINE.catID
//                   ? Color.primary
//                   : Color.black,}}>
//         <FontAwesomeIcon
//             // icon="fa-solid fa-pills"
//             icon={faBed}
//             className="px-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.MEDICINE.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           /> Complaints</span>
//   </button>
//   <ul className="dropdown-menu w-100 " style={{border:'0px'}} >
// <li>
//  <div
//           className="d-flex  align-items-center text-center gap-2 px-3 mx-3 p-1"
//           style={{border:'2px solid white',borderRadius:'8px', borderLeft:'3px solid lightgray'}}
//           onClick={() => handleItemClick(Categories.COMPLAINTS.catID)}
//         >
//           <FontAwesomeIcon
//             // icon="fa-solid fa-bed-pulse"
//             icon={faBedPulse}
//             className="mb-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.COMPLAINTS.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           />
//           <span
//             style={{
//               fontSize: 12,
//               fontWeight: "bold",
//               color: activeItemId === Categories.COMPLAINTS.catID ? Color.primary : Color.graydark, // Color changes based on activeItemId
//             }}
//           >
//             Complaints
//           </span>
//         </div>



// </li>
         
//   </ul>
// </div>



// <div className="dropdown w-100" style={{}}>
//   <button className="btn btn-light dropdown-toggle w-100 d-flex align-items-center justify-content-between" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width:'100%'}}>
//     <span style={{ color:
//                 activeItemId === Categories.DURATION.catID||Categories.DIAGNOSIS.catID
//                   ? Color.primary
//                   : Color.black,}}>
//         <FontAwesomeIcon
//             // icon="fa-solid fa-pills"
//             icon={faBriefcaseMedical}
//             className="px-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.DURATION.catID||Categories.DIAGNOSIS.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           /> Diagnosis</span>
//   </button>
//   <ul className="dropdown-menu w-100 " style={{border:'0px'}} >
// <li>
//    <div
//           className="d-flex align-items-center text-center gap-2 px-3 mx-3 p-1"
//           style={{border:'2px solid white',borderRadius:'8px', borderLeft:'3px solid lightgray'}}
//           onClick={() => handleItemClick(Categories.DIAGNOSIS.catID)}
//         >
//           <FontAwesomeIcon
//             // icon="fa-solid fa-briefcase-medical"
//             icon={faBriefcaseMedical}
//             className="mb-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.DIAGNOSIS.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           />

//           <FontAwesomeIcon
//            icon="fa-regular fa-notes-medical"
         
//             />
//           <span
//             style={{
//               fontSize: 12,
//               fontWeight: "bold",
//               color:
//                 activeItemId === Categories.DIAGNOSIS.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           >
//             Diagnosis
//           </span>
//         </div>

// </li>
//          <li><div
//           className="d-flex  align-items-center text-center gap-2 px-3 mx-3 p-1"
//           style={{border:'2px solid white',borderRadius:'8px', borderLeft:'3px solid lightgray'}}
//           onClick={() => handleItemClick(Categories.DURATION.catID)}
//         >
//           <FontAwesomeIcon
//             // icon="fa-solid fa-bed-pulse"
//             icon={faStopwatch}
//             className="mb-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.DURATION.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           />
//           <span
//             style={{
//               fontSize: 12,
//               fontWeight: "bold",
//               color: activeItemId === Categories.DURATION.catID ? Color.primary : Color.graydark, // Color changes based on activeItemId
//             }}
//           >
//             Duration

//           </span>
//         </div></li>
//   </ul>
// </div>



// <div className="dropdown w-100" style={{}}>
//   <button className="btn btn-light dropdown-toggle w-100 d-flex align-items-center justify-content-between" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width:'100%'}}>
//     <span style={{ color:
//                 activeItemId === Categories.LAB_TESTS_AND_IMAGING.catID
//                   ? Color.primary
//                   : Color.black,}}>
//         <FontAwesomeIcon
//             // icon="fa-solid fa-pills"
//             icon={faVial}
//             className="px-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.LAB_TESTS_AND_IMAGING.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           /> Lab Test and Imaging</span>
//   </button>
//   <ul className="dropdown-menu w-100 " style={{border:'0px'}} >
// <li>

//   <div
//           className="d-flex  align-items-center text-center gap-2 px-3 mx-3 p-1"
//           style={{border:'2px solid white',borderRadius:'8px', borderLeft:'3px solid lightgray'}}
//           onClick={() => handleItemClick(Categories.LAB_TESTS_AND_IMAGING.catID)}
//         >
//           <FontAwesomeIcon
//             // icon="fa-solid fa-bed-pulse"
//             icon={faVial}
//             className="mb-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.LAB_TESTS_AND_IMAGING.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           />
//           <span
//             style={{
//               fontSize: 12,
//               fontWeight: "bold",
//               color: activeItemId === Categories.LAB_TESTS_AND_IMAGING.catID ? Color.primary : Color.graydark, // Color changes based on activeItemId
//             }}
//           >
//             Lab Test And Imaging

//           </span>
//         </div>

//  </li>
//   </ul>
// </div>

// <div className="dropdown w-100" style={{}}>
//   <button className="btn btn-light dropdown-toggle w-100 d-flex align-items-center justify-content-between" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width:'100%'}}>
//     <span style={{ color:
//                 activeItemId === Categories.TESTS_REQUESTED.catID
//                   ? Color.primary
//                   : Color.black,}}>
//         <FontAwesomeIcon
//             // icon="fa-solid fa-pills"
//             icon={faDroplet}
//             className="px-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.TESTS_REQUESTED.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           /> Test Requested</span>
//   </button>
//   <ul className="dropdown-menu w-100 " style={{border:'0px'}} >
// <li>

// <div
//           className="d-flex align-items-center text-center gap-2 px-3 mx-3 p-1"
//           style={{border:'2px solid white',borderRadius:'8px', borderLeft:'3px solid lightgray'}}
//           onClick={() => handleItemClick(Categories.TESTS_REQUESTED.catID)}
//         >
//           <FontAwesomeIcon
//             // icon="fa-solid fa-bed-pulse"
//             icon={faDroplet}
//             className="mb-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.TESTS_REQUESTED.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           />
//           <span
//             style={{
//               fontSize: 12,
//               fontWeight: "bold",
//               color: activeItemId === Categories.TESTS_REQUESTED.catID ? Color.primary : Color.graydark, // Color changes based on activeItemId
//             }}
//           >
//             Test Requested

//           </span>
//         </div></li>
//   </ul>
// </div>

// <div className="dropdown w-100" style={{}}>
//   <button className="btn btn-light dropdown-toggle w-100 d-flex align-items-center justify-content-between" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width:'100%'}}>
//     <span style={{ color:
//                 activeItemId === Categories.ENT.catID ||Categories.CVS.catID ||Categories.RS.catID ||Categories.CNS.catID ||Categories.PA.catID
//                   ? Color.primary
//                   : Color.black,}}>
//         <FontAwesomeIcon
//             // icon="fa-solid fa-pills"
//             icon={faStethoscope}
//             className="px-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.ENT.catID ||Categories.CVS.catID ||Categories.RS.catID ||Categories.CNS.catID ||Categories.PA.catID
//                  ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           /> Systemic Examination</span>
//   </button>
//   <ul className="dropdown-menu w-100 " style={{border:'0px'}} >
// <li>
// <div
//           className="d-flex align-items-center text-center gap-2 px-3 mx-3 p-1"
//           style={{border:'2px solid white',borderRadius:'8px', borderLeft:'3px solid lightgray'}}
//           onClick={() => handleItemClick(Categories.CVS.catID)}
//         >
//           <FontAwesomeIcon
//             // icon="fa-solid fa-bed-pulse"
//             icon={faHeart}
//             className="mb-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.CVS.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           />
//           <span
//             style={{
//               fontSize: 12,
//               fontWeight: "bold",
//               color: activeItemId === Categories.CVS.catID ? Color.primary : Color.graydark, // Color changes based on activeItemId
//             }}
//           >
//            CVS

//           </span>
//         </div>

//          <div
//           className="d-flex align-items-center text-center gap-2 px-3 mx-3 p-1"
//           style={{border:'2px solid white',borderRadius:'8px', borderLeft:'3px solid lightgray'}}
//           onClick={() => handleItemClick(Categories.RS.catID)}
//         >
//           <FontAwesomeIcon
//             // icon="fa-solid fa-bed-pulse"
//             icon={faBrain}
//             className="mb-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.RS.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           />
//           <span
//             style={{
//               fontSize: 12,
//               fontWeight: "bold",
//               color: activeItemId === Categories.RS.catID ? Color.primary : Color.graydark, // Color changes based on activeItemId
//             }}
//           >
//            RS

//           </span>
//         </div>

//          <div
//           className="d-flex align-items-center text-center gap-2 px-3 mx-3 p-1"
//           style={{border:'2px solid white',borderRadius:'8px', borderLeft:'3px solid lightgray'}}
//           onClick={() => handleItemClick(Categories.CNS.catID)}
//         >
//           <FontAwesomeIcon
//             // icon="fa-solid fa-bed-pulse"
//             icon={faBrain}
//             className="mb-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.CNS.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           />
//           <span
//             style={{
//               fontSize: 12,
//               fontWeight: "bold",
//               color: activeItemId === Categories.CNS.catID ? Color.primary : Color.graydark, // Color changes based on activeItemId
//             }}
//           >
//            CNS

//           </span>
//         </div>

//          <div
//           className="d-flex align-items-center text-center gap-2 px-3 mx-3 p-1"
//           style={{border:'2px solid white',borderRadius:'8px', borderLeft:'3px solid lightgray'}}
//           onClick={() => handleItemClick(Categories.PA.catID)}
//         >
//           <FontAwesomeIcon
//             // icon="fa-solid fa-bed-pulse"
//             icon={faUserDoctor}
//             className="mb-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.PA.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           />
//           <span
//             style={{
//               fontSize: 12,
//               fontWeight: "bold",
//               color: activeItemId === Categories.PA.catID ? Color.primary : Color.graydark, // Color changes based on activeItemId
//             }}
//           >
//            PA

//           </span>
//         </div>
//         <div
//           className="d-flex  align-items-center text-center gap-2 px-3 mx-3 p-1"
//           style={{border:'2px solid white',borderRadius:'8px', borderLeft:'3px solid lightgray'}}
//           onClick={() => handleItemClick(Categories.ENT.catID)}
//         >
//           <FontAwesomeIcon
//             // icon="fa-solid fa-bed-pulse"
//             icon={faFaceMeh}
//             className="mb-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.ENT.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           />
//           <span
//             style={{
//               fontSize: 12,
//               fontWeight: "bold",
//               color: activeItemId === Categories.ENT.catID ? Color.primary : Color.graydark, // Color changes based on activeItemId
//             }}
//           >
//            ENT

//           </span>
//         </div></li>
//   </ul>
// </div>


// <div className="dropdown w-100" style={{}}>
//   <button className="btn btn-light dropdown-toggle w-100 d-flex align-items-center justify-content-between" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width:'100%'}}>
//     <span style={{ color:
//                 activeItemId === Categories.INVESTIGATIONS.catID
//                   ? Color.primary
//                   : Color.black,}}>
//         <FontAwesomeIcon
//             // icon="fa-solid fa-pills"
//             icon={faSyringe}
//             className="px-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.INVESTIGATIONS.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           /> Investigation</span>
//   </button>
//   <ul className="dropdown-menu w-100 " style={{border:'0px'}} >
// <li>
// <div
//           className="d-flex  align-items-center text-center gap-2 px-3 mx-3 p-1"
//           style={{border:'2px solid white',borderRadius:'8px', borderLeft:'3px solid lightgray'}}
//           onClick={() => handleItemClick(Categories.INVESTIGATIONS.catID)}
//         >
//           <FontAwesomeIcon
//             // icon="fa-solid fa-syringe"
//             icon={faSyringe}
//             className="mb-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.INVESTIGATIONS.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           />
//           <span
//             style={{
//               fontSize: 12,
//               fontWeight: "bold",
//               color:
//                 activeItemId === Categories.INVESTIGATIONS.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           >
//             Investigation
//           </span>
//         </div></li>
//   </ul>
// </div>


// <div className="dropdown w-100" style={{}}>
//   <button className="btn btn-light dropdown-toggle w-100 d-flex align-items-center justify-content-between" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width:'100%'}}>
//     <span style={{ color:
//                 activeItemId === Categories.PREGNANCY_OUTCOME.catID
//                   ? Color.primary
//                   : Color.black,}}>
//         <FontAwesomeIcon
//             // icon="fa-solid fa-pills"
//             icon={faPersonPregnant}
//             className="px-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.PREGNANCY_OUTCOME.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           /> Obstetric History</span>
//   </button>
//   <ul className="dropdown-menu w-100 " style={{border:'0px'}} >
// <li>

//  <div
//           className="d-flex  align-items-center text-center gap-2 px-3 mx-3 p-1"
//           style={{border:'2px solid white',borderRadius:'8px', borderLeft:'3px solid lightgray'}}
//           onClick={() => handleItemClick(Categories.PREGNANCY_OUTCOME.catID)}
//         >
//           <FontAwesomeIcon
//             // icon="fa-solid fa-bed-pulse"
//             icon={faPersonPregnant}
//             className="mb-2 fs-5"
//             style={{
//               cursor: "pointer",
//               color:
//                 activeItemId === Categories.PREGNANCY_OUTCOME.catID
//                   ? Color.primary
//                   : Color.graydark, // Color changes based on activeItemId
//             }}
//           />
//           <span
//             style={{
//               fontSize: 12,
//               fontWeight: "bold",
//               color: activeItemId === Categories.PREGNANCY_OUTCOME.catID ? Color.primary : Color.graydark, // Color changes based on activeItemId
//             }}
//           >
//           Pregnancy Outcomes

//           </span>
//         </div></li>
//   </ul>
// </div>



        
        
//       </div>
      
//     </>
//   );
// };

// export default MasterSideBar;



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
