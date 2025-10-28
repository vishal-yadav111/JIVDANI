import React, { useState } from "react";
// import { DATA_SAVED, } from "../../Constant";
// import CustomTooltip from "../CustomTooltip";
import { AddEditMedicine } from "../master/masterApi/AddEditMedicine";
import ToastFist from "../Toast/ToastFist";
import { ERROR_MSG ,DATA_SAVED} from "../master/Constant";

const Medication = ({ customeKey }) => {

  const [inputValue, setInputValue] = useState({
    name: "",
    contents: "",
    unit: {
      id: "1",
      name: "",
      active: true
    },
    dosage: {
      id: "1",
      name: "",
      active: true
    },
    whens: {
      id: "1",
      name: "",
      active: true
    },
    frequency: {
      id: "1",
      name: "",
      active: true
    },
    duration: "",
    type: "",
    notes: "",
    active: true
  });

  const [loading, setLoading] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [colorStatus, setColorStatus] = useState(3);
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (e, obj = null) => {
    const { name, value } = e.target;
    if (obj != null) {
      setInputValue({
        ...inputValue,
        [obj]: {
          ...inputValue[obj],
          name: value
        }
      });
    } else {
      setInputValue({ ...inputValue, [name]: name == 'name' ? value.toUpperCase() : value });
    }
  };


  const handleSubmit = async () => {
    setLoading(true);

    const response = await AddEditMedicine({ data: inputValue });
    // console.log(response, 'dd')
    if (response) {

      setShowToast(true);
      setLoading(false);
      setToastMsg(DATA_SAVED);
      setColorStatus(1);

      setInputValue({
        name: "",
        contents: "",
        type: "",
        notes: "",
        duration: "",
        unit: {
          id: "",
          name: "",
          active: true
        },
        dosage: {
          id: "",
          name: "",
          active: true
        },
        whens: {
          id: "",
          name: "",
          active: true
        },
        frequency: {
          id: "",
          name: "",
          active: true
        },
        active: true
      });

    } else {
      setShowToast(true);
      setLoading(false);
      setToastMsg(ERROR_MSG);
      setColorStatus(0);
    }
  };


  return (
    <>

      <div data-bs-toggle="modal"
        data-bs-target="#Medicine">
        {customeKey ?
          <button className="btn btn-primary" style={{ fontSize: 15, }}>Create New +</button>
          : 
          <CustomTooltip
            icon="fa-solid fa-square-plus"
            tooltipText="Add Medicine"
            mainText={"Add medicine"}
          />
          
          }
      </div>

      <div
        className="modal fade"
        id="Medicine"
        tabIndex="-1"
        aria-labelledby="medicineLabellLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="medicineLabellLabel">
                Add Medications
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body bg-light">
              <form>
                <div class="row row-cols-3">
                  <div className="col-8">
                    <label htmlFor="name" className="col-form-label">
                      Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={inputValue.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="">
                    <label htmlFor="contents" className="col-form-label">
                      Type:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="type"
                      name="type"
                      value={inputValue.type}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div class="">
                  <div class="row row-cols-3">
                    <div class="col">
                      {" "}
                      <div className="">
                        <label htmlFor="contents" className="col-form-label">
                          Contents:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="contents"
                          name="contents"
                          value={inputValue.contents}
                          onChange={handleInputChange}
                        />
                      </div>

                    </div>
                    <div class="col">
                      <div className="">
                        <label htmlFor="dosage" className="col-form-label">
                          Dosage:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="dosage"
                          name="dosage"
                          value={inputValue.dosage?.name}
                          onChange={(e) => handleInputChange(e, "dosage")}
                        />
                      </div>
                    </div>
                    <div class="col">
                      {" "}
                      <div className="">
                        <label htmlFor="unit" className="col-form-label">
                          Unit:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="unit"
                          name="unit"
                          value={inputValue.unit?.name}
                          onChange={(e) => handleInputChange(e, "unit")}
                        />
                      </div>
                    </div>
                    <div class="col">
                      {" "}
                      <div className="">
                        <label htmlFor="whens" className="col-form-label">
                          When to Take:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="whens"
                          name="whens"
                          value={inputValue.whens?.name}
                          onChange={(e) => handleInputChange(e, "whens")}
                        />
                      </div>
                    </div>
                    <div class="col">
                      {" "}
                      <div className="">
                        <label htmlFor="frequency" className="col-form-label">
                          Frequency:
                        </label>

                        <input
                          type="text"
                          className="form-control"
                          id="whens"
                          name="frequency"
                          value={inputValue.frequency?.name}
                          onChange={(e) => handleInputChange(e, "frequency")}
                        />
                      </div>
                    </div>
                    <div class="col">
                      {" "}
                      <div className="">
                        <label htmlFor="duration" className="col-form-label">
                          Duration:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="duration"
                          name="duration"
                          value={inputValue.duration}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <label htmlFor="notes" className="col-form-label">
                    Notes:
                  </label>
                  <textarea
                    className="form-control"
                    id="notes"
                    name="notes"
                    value={inputValue.notes}
                    onChange={handleInputChange}
                    style={{ height: "100px" }}
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Sending..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastFist
        showToast={showToast}
        setShowToast={setShowToast}
        title="Indication"
        message={toastMsg}
        duration="Just now"
        status={colorStatus}
      />
    </>
  );
};

export default Medication;
