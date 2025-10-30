import React, { useState } from "react";
// import { DATA_SAVED, } from "../../Constant";
// import CustomTooltip from "../CustomTooltip";
import { AddEditMedicine } from "../master/masterApi/AddEditMedicine";
import ToastFist from "../Toast/ToastFist";
import { ERROR_MSG ,DATA_SAVED} from "../master/Constant";
import { AddEditAll } from "../master/masterApi/AddEditAll";

const AddforAll = ({ customeKey }) => {

  const [inputValue, setInputValue] = useState({
    id:"",
    name: "",
    contents: "",
   
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

    const response = await AddEditAll({  name:inputValue.name  });;
    // console.log(response, 'dd')
    if (response) {

      setShowToast(true);
      setLoading(false);
      setToastMsg(DATA_SAVED);
      setColorStatus(1);

      setInputValue({
        id:"",
        name: "",
      
     
        
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
                Add 
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

export default AddforAll;
