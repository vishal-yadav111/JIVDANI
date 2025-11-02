// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useState } from "react";

// import { Color } from "../../visitConstant/Color";

// export const TableFooter = ({
//   rowsPerPage,
//   handleRowsPerPageChange,
//   medicinesLength,
//   currentPage,
//   handlePageChange,
//   totalElements = 0,
//   totalPages = 0,
// }) => {
//   const indexOfLastMedicine = currentPage * rowsPerPage;
//   const indexOfFirstMedicine = indexOfLastMedicine - rowsPerPage;

//   return (
//     <div
//       className="flex-row d-flex justify-content-between align-items-center mt-1 bg-white flex-wrap  rounded py-1 px-2 col-12"
//       style={{ minHeight: 46 }}
//     >
//       <div className="d-flex align-items-center ">
//         <label htmlFor="rowsPerPage" className="me-2" style={{ fontSize: 14 }}>
//           Rows per page
//         </label>
//         <select
//           id="rowsPerPage"
//           value={rowsPerPage}
//           onChange={handleRowsPerPageChange}
//           className="form-select form-select-sm"
//           style={{ width: "auto" }}
//         >
//           {/* <option value={5}>5</option> */}
//           <option value={50}>50</option>
//           <option value={100}>100</option>
//           <option value={200}>200</option>
//           <option value={500}>500</option>
//         </select>
//       </div>

//       {/* Pagination Info and Buttons */}
//       <div className="d-flex align-items-center ">
//         {/* Pagination Info */}
//         <div className="me-4">
//           {medicinesLength > 0 ? (
//             <>
//               {indexOfFirstMedicine + 1} -{" "}
//               {indexOfFirstMedicine + medicinesLength}
//               {/* {Math.min(indexOfLastMedicine, medicinesLength * currentPage)} */}
//             </>
//           ) : (
//             "0 - 0"
//           )}{" "}
//           {totalElements !== 0 && `( Total ${totalElements} )`}
//         </div>

//         {/* Pagination Buttons */}
//         <div className="d-flex align-items-center">
//           <button
//             className="btn btn-sm btn-primary me-2 border-0"
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//           >
//             <FontAwesomeIcon icon="fa-solid fa-angle-left" />
//           </button>

//           <button
//             className="btn btn-sm btn-primary border-0"
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={medicinesLength < rowsPerPage}
//           >
//             <FontAwesomeIcon icon="fa-solid fa-angle-right" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const TableFooter = ({
  rowsPerPage,
  handleRowsPerPageChange,
  medicinesLength,
  currentPage,
  handlePageChange,
  totalElements = 0,
  totalPages = 0,
}) => {
  // Calculate index range of items currently displayed
  const indexOfLastMedicine = currentPage * rowsPerPage;
  const indexOfFirstMedicine = indexOfLastMedicine - rowsPerPage;

  return (
    <div >
    <div
      className="d-flex justify-content-between align-items-center mt-1 bg-white flex-wrap rounded py-1 px-2 col-12"
      style={{ minHeight: 46 }}
    >
      {/* Rows Per Page Selector */}
      <div className="d-flex align-items-center" style={{}}>
        <label htmlFor="rowsPerPage" className="me-2" style={{ fontSize: 14 }}>
          Rows per page
        </label>
        <select
          id="rowsPerPage"
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          className="form-select form-select-sm"
          style={{ width: "auto" }}
        >
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={200}>200</option>
          <option value={500}>500</option>
        </select>
      </div>

      {/* Pagination Info */}
      <div className="d-flex align-items-center">
        <div className="me-4">
          {medicinesLength > 0 ? (
            <>
              {indexOfFirstMedicine + 1} -{" "}
              {Math.min(indexOfFirstMedicine + medicinesLength, totalElements)}
            </>
          ) : (
            "0 - 0"
          )}
          {totalElements !== 0 && ` (Total ${totalElements})`}
        </div>

        {/* Pagination Buttons */}
        <div className="d-flex align-items-center">
          <button
            className="btn btn-sm btn-primary me-2 border-0"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FontAwesomeIcon 
            // icon="fa-solid fa-angle-left"
            icon={faAngleLeft}
             />
          </button>

          <button
            className="btn btn-sm btn-primary border-0"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={
              medicinesLength < rowsPerPage || currentPage === totalPages
            }
          >
            <FontAwesomeIcon
            //  icon="fa-solid fa-angle-right" 
            icon={faAngleRight}
            />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};
