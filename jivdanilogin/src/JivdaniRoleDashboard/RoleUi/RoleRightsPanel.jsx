import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEdit,
  faTrash,
  faPrint,
  faCreditCard,
  faXmark,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const RoleRightsPanel = ({ modules }) => {
  const [selectedModules, setSelectedModules] = useState([]);

  const handleCheckboxChange = (moduleName) => {
    setSelectedModules((prev) =>
      prev.includes(moduleName)
        ? prev.filter((name) => name !== moduleName)
        : [...prev, moduleName]
    );
  };

  return (
    <div className="row mt-1">
      {/* Left: Modules Section */}
      <div className="col-md-4 mb-3">
        <div className="card shadow-sm border-0">
          <div className="card-header bg-primary text-white py-2">
            <h6 className="mb-0">Modules</h6>
          </div>

          <div className="position-relative w-100 my-1 p-1">
            <input
              type="text"
              placeholder="Search modules..."
              className="form-control pe-5"
              style={{ height: "30px" }}
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="text-primary"
              style={{
                position: "absolute",
                right: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            />
          </div>

          <div
            className="card-body"
            style={{
              maxHeight: "280px",
              overflowY: "auto",
              scrollbarWidth: "none",
            }}
          >
            {modules.map((module, index) => (
              <div key={index} className="form-check mb-2 d-flex  align-items-center">

                     <input
                  type="checkbox"
                  className="form-check-input"
                  id={`module-${index}`}
                  checked={selectedModules.includes(module.names)}
                  onChange={() => handleCheckboxChange(module.names)}
                />
                <label
                  className="form-check-label"
                  htmlFor={`module-${index}`}
                >
                  <FontAwesomeIcon icon={faCreditCard} className="px-1" />{" "}
                  {module.names}
                </label>
           
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gap */}
      <div className="col-md-1"></div>

      {/* Right: Role & Rights Section */}
      <div className="col-md-7 mb-3">
        <div className="card shadow-sm border-0">
          <div className="card-header bg-primary text-white py-2">
            <h6 className="mb-0">Role & Rights</h6>
          </div>

          <div className="card-body">
            <h6 className="mb-3">Selected Modules</h6>

            {selectedModules.length === 0 ? (
              <div className="border rounded p-3 bg-light text-center">
                <p className="text-muted mb-0">
                  Select a module from the left to display it here.
                </p>
              </div>
            ) : (
              <table className="table table-bordered table-sm align-middle">
                <thead className="table-secondary">
                  <tr>
                    <th style={{ width: "80%" }}>Module Name</th>
                    <th className="text-center">Action</th>
               
                  </tr>
                </thead>
                <tbody>
                  {selectedModules.map((mod, index) => (
                    <tr key={index}>
                      <td>{mod}</td>
                      <td className="text-center">
                        <div className="d-flex align-items-center justify-content-center gap-2">
                          <button
                            className="btn btn-success btn-sm d-flex align-items-center justify-content-center"
                            style={{ width: "28px", height: "28px" }}
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                           <button
                            className="btn btn-warning btn-sm text-white d-flex align-items-center justify-content-center"
                            style={{ width: "28px", height: "28px" }}
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                                       <button
                            className="btn btn-danger btn-sm d-flex align-items-center justify-content-center"
                            style={{ width: "28px", height: "28px" }}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>

                                  <button
                            className="btn btn-info btn-sm text-white d-flex align-items-center justify-content-center"
                            style={{ width: "28px", height: "28px" }}
                          >
                            <FontAwesomeIcon icon={faPrint} fontSize={11} />
                          </button>
                        </div>
                      </td>
                
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleRightsPanel;
