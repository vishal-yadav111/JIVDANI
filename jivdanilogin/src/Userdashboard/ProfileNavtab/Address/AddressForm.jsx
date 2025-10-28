
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faSave } from "@fortawesome/free-solid-svg-icons";

export const AddressForm = ({ onSave, selectedAddress }) => {
  const emptyForm = {
    id: null,
    name: "",
    fatherName: "",
    dob: "",
    purpose: "",
    addressLine1: "",
    mobileNo: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
    country: "",
    isDefault: false,
  };

  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  // ✅ Fill form when selecting address
  useEffect(() => {
    if (selectedAddress) setFormData(selectedAddress);
  }, [selectedAddress]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!/^[0-9]{10}$/.test(formData.mobileNo))
      newErrors.mobileNo = "Mobile number must be 10 digits.";
    if (!/^[0-9]{6}$/.test(formData.pincode))
      newErrors.pincode = "Pin code must be 6 digits.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
   

    setErrors({});
    onSave(formData);
    setFormData(emptyForm); // ✅ Always clear form after saving
  };

  const handleClearForm = () => {
    setFormData(emptyForm);
    setErrors({});
  };

  return (
    <div className="card p-4 shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold m-0">Add / Edit Address</h5>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Patient Name <span className="text-danger">*</span> </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Add patient name"
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Father's/Husband Name <span className="text-danger">*</span></label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="form-control"
              placeholder="Father/Husband name"
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Date of Birth <span className="text-danger">*</span></label>
            <input
              type="date"
              name="landmark"
              value={formData.landmark}
              onChange={handleChange}
              className="form-control"
              placeholder="Date Of Birth"
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Gender <span className="text-danger">*</span></label>
            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="col-12">
            <label className="form-label">Flat No & Building Name</label>
            <input
              type="text"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              className="form-control"
              placeholder="Flat No & Building Name"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Mobile No <span className="text-danger">*</span></label>
            <input
              type="text"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              className={`form-control ${errors.mobileNo ? "is-invalid" : ""}`}
             placeholder="Mobile No"
              required
            />
              {errors.mobileNo && (
    <div className="invalid-feedback">{errors.mobileNo}</div>
  )}
          </div>

          <div className="col-md-6">
            <label className="form-label">City <span className="text-danger">*</span></label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="form-control"
              placeholder="city"
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">State <span className="text-danger">*</span></label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="form-control"
              placeholder="state"
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Pin / Zip <span className="text-danger">*</span></label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className={`form-control ${errors.pincode ? "is-invalid" : ""}`}
              placeholder="Pin code"
              required
            />
            {errors.pincode && (
  <div className="invalid-feedback">{errors.pincode}</div>
)}
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-4">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="default-address"
              name="isDefault"
              checked={formData.isDefault}
              onChange={handleChange}
            />
            <label htmlFor="default-address" className="form-check-label">
              Mark As Default
            </label>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-danger me-2"
              onClick={handleClearForm}
            >
              <FontAwesomeIcon icon={faArrowsRotate} /> Clear
            </button>
            <button
              type="submit"
              className="btn text-white"
              style={{ backgroundColor: "rgb(154,47,254)" }}
            >
              <FontAwesomeIcon icon={faSave} className="me-2" />
                {formData.id ? "Update" : "Save"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
