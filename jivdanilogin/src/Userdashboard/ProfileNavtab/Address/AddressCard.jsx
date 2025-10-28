
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const AddressCard = ({ address, onDelete, onSelect }) => {
  return (
    <div
      className="card p-3 mb-3"
      style={{
        borderLeft: "5px solid rgb(154,47,254)",
        borderRadius: "10px",
        backgroundColor: "rgba(154,47,254,0.1)",
        cursor: "pointer",
        position: "relative",
      }}
      // ✅ Pass selected address properly on click
      onClick={() => onSelect(address)}
    >
      <div className="d-flex justify-content-between">
        <div>
          <h6 className="fw-bold">{address.name}</h6>
          <p className="mb-1 text-muted small">
            <strong>Father/Husband: </strong> {address.fatherName}
          </p>

          {address.addressLine1 && (
            <p className="mb-1 text-muted small">
              <strong>Address: </strong> {address.addressLine1}
            </p>
          )}

          <p className="mb-1 text-muted small">
            {address.city}, {address.state} - {address.pincode}
          </p>

          <p className="mb-1 text-muted small">
            <strong>Gender:</strong> {address.purpose}
          </p>

          <p className="mb-1 text-muted small">
            <strong>Dob:</strong> {address.landmark}
          </p>

          <p className="text-muted small">
            <strong>Mobile:</strong> {address.mobileNo || "NA"}
          </p>
        </div>

        <div className="text-end">
          <button
            className="btn btn-link text-muted p-0"
            onClick={(e) => {
              e.stopPropagation(); // ✅ Prevent card click while deleting
              onDelete(address);
            }}
          >
            <FontAwesomeIcon
              icon={faTrash}
              style={{ color: "rgba(141, 75, 203, 1)" }}
            />
          </button>

          {address.isDefault && (
            <div>
              <span
                className="badge"
                style={{
                  backgroundColor: "rgba(134, 64, 200, 1)",
                  borderRadius: "10px",
                  position: "absolute",
                  bottom: "20px",
                  right: "15px",
                }}
              >
                Default
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
