import React, { useState } from "react";
import swal from "sweetalert";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSave,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line no-unused-vars
export const Edituser = ({ customer, onSave, onCancel, onDelete }) => {
  const [editedData, setEditedData] = useState({ ...customer });

  // Generate initials for avatar
  const getInitials = (fullName) => {
    if (!fullName) return "";
    const words = fullName.trim().split(" ");
    return words.map((w) => w[0]?.toUpperCase()).join("").slice(0, 2);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedData);

  };
  const removeuser = () => {
    swal({
      title: "Are you sure?",
      text: "Do you want to delete Your Profile",
      icon: "warning",
      buttons: ["Cancel", "Yes"],
      dangerMode: true,
    })
  }
  return (<>
    <div className="card pt-4  shadow-sm mb-4 w-100">
      <form onSubmit={handleSubmit} className="w-100 pb-3 px-4">
        <div className="row g-4 align-items-center">
          {/* Avatar */}
          <div className="col-md-2 d-flex justify-content-center align-items-center">
            <div
              className="profile-avatar d-flex align-items-center justify-content-center rounded-circle"

            >
              <style>{`.profile-avatar {
  width: 120px;
  height: 120px;
  background-color: rgba(154, 47, 254, 0.1);
  color: rgb(154, 47, 254);
  font-weight: bold;
  font-size: 2.5rem;
  border: 2px solid rgb(154, 47, 254);
  transition: all 0.3s ease; /* smooth resizing */
}

/* Tablet */
@media (max-width: 768px) {
  .profile-avatar {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .profile-avatar {
    width: 80px;
    height: 80px;
    font-size: 1.5rem;
  }
}
`}</style>

              {getInitials(editedData.name) || (
                <FontAwesomeIcon icon={faUser} />
              )}
            </div>
          </div>

          {/* Form Section */}
          <div className="col-md-10">
            {/* Row 1: Name | ID | Mobile */}
            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={editedData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label fw-semibold">Customer ID</label>
                <input
                  type="text"
                  className="form-control bg-light"
                  value={editedData.customerId}
                  readOnly
                />
              </div>

              <div className="col-md-4">
                <label className="form-label fw-semibold">Mobile No</label>
                <input
                  type="text"
                  name="mobileNo"
                  className="form-control bg-light"
                  value={editedData.mobileNo}
                  readOnly
                />
              </div>
            </div>

            {/* Row 2: Email + Buttons */}
            <div className="row g-3 align-items-end mt-1">
              {/* Smaller email field */}
              <div className="col-md-5 col-lg-4">
                <label className="form-label fw-semibold">Email ID</label>
                <input
                  type="email"
                  name="emailId"
                  className="form-control"
                  value={editedData.emailId}
                  onChange={handleChange}
                />
              </div>

              {/* Buttons in same row, right aligned */}
              <div className="col-md-7 col-lg-8 d-flex justify-content-end gap-3 mt-4">
                <button
                  type="button"
                  className="btn d-flex align-items-center gap-2 px-2"
                  style={{ backgroundColor: '#6c757d', color: 'white' }}
                  onClick={onCancel}
                >
                  <FontAwesomeIcon icon={faTimes} />
                  Cancel
                </button>

                <button
                  type="submit"
                  className="btn d-flex align-items-center gap-2 px-3"
                  style={{
                    backgroundColor: "rgb(154,47,254)",
                    color: "white",
                    fontWeight: "500",
                  }}
                >
                  <FontAwesomeIcon icon={faSave} />
                  Save
                </button>

              </div>

            </div>

          </div>

        </div>

      </form>
      <div className="d-flex bg-light px-4 py-3" style={{ justifyContent: "space-between" }}>
        <div>
          <h5 className="m-0">Delete</h5>
          <small className="text-secondar">Permanently Remove your account and all associated data. This action cannot be under done</small>
        </div>
        <div className="d-flex align-items-center justify-content-center px-2">
          <button
            type="button"
            className="btn btn-danger d-flex align-items-center gap-2 px-2"
            onClick={() => removeuser()}
          >
            <FontAwesomeIcon icon={faTrash} />
            <span className="d-none d-lg-inline"> Permanently</span> Delete
          </button></div>
      </div>
    </div>
  </>
  );
};
