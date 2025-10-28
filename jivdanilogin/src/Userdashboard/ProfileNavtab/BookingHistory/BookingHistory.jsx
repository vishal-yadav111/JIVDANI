
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import No_data_found from "../No_data_found.svg"

import {
  faBan,
  faDownload,
  faClock,
  faComments,
  faPhone,
  faMoneyBills,
  faCreditCardAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  ACCESS_TOKEN,
  BASE_URL,
  CUSTOMER_ID,
  DEBUG_LOG_ENABLED,
  
  GET_OREDER_HISTORY,
  IMG_BASE_URL,
  SESSION_ID,
} from "../../Constant";
import apiHelper from "../../apiHelper";
import unavailable from "../unavailable.jpg";
import { useNavigate } from "react-router";



const BookingHistory = () => {
  const [orderItemList, setOrderItemList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate=useNavigate();

  // for payment current status api response-> into text and color
  const ORDER_STATUS_MAP = {
    0: "PAYMENT PENDING",
    1: "PLACED",
    2: "CANCELLED",
    3: "COMPLETED",
    "-1": "PAYMENT FAILED",
  };
  const ORDER_STATUS_COLOR = {
    0: "rgba(247, 166, 23, 0.3)",
    1: "rgba(124, 164, 201, 0.2)",
    2: "rgba(255, 87, 87, 0.4)",
    3: "rgba(75, 181, 67, 0.2)",
    "-1": "rgba(255, 87, 87, 0.4)",
  };
const ORDER_STATUS_TEXT_COLOR = {
    0: "#F7A617",
    1: "rgba(85, 126, 229, 1)",
    2: "rgba(255, 87, 87, 9)",
    3: "rgba(75, 181, 67, 1)",
    "-1": "rgba(255, 87, 87, 9)",
  };
  useEffect(() => {
    getOrdertLists();
  }, []);

  const getOrdertLists = async () => {
    const customerId = localStorage.getItem(CUSTOMER_ID);

    try {
      setLoading(true);
      const payload = {
        customerId: customerId,
      };

      const res = await apiHelper(GET_OREDER_HISTORY, payload);
       
      setOrderItemList(res?.respData?.respMsg?.morderInfoList);
      
    } catch (err) {
      if (err.response?.status === 401) {
        
        navigate("/login");
      } else {
        swal("data : " + err);
        if (DEBUG_LOG_ENABLED) {
          console.log(err);
        }
      }
    } finally {
      setLoading(false);
    }
  };





  
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center ">
        <div className="card shadow-lg border-0 rounded-4 p-5 text-center w-100 bg-light">
          <div className="d-flex flex-column align-items-center bg-light">
          <div className="spinner-border text-primary" role="status">
                   
                  </div>
            <strong className="text-muted py-3">
              Loading your bookings History
             
            </strong>
           
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-100 py-2">
      {!orderItemList ||orderItemList?.length ===0 &&(
        <div className="container py-4 fs-4 fw-medium text-center text-muted">
            <img src={No_data_found} alt=""height={250} />
         <div>Booking not found!</div> 
         

        </div>
        
      )}

    
  

      {/* MAIN LOOP — PRINT BY ID ORDER */}
      {orderItemList && orderItemList.map((Data, index) => {
        const hasDetails = Data.details && Data.details.length > 0;
        const parsedAddress =
          Data.address && typeof Data.address === "string"
            ? JSON.parse(Data.address)
            : Data.address;

        // ----------------- CARD TYPE 1 -----------------
        if (!hasDetails) {
          return (
            <div key={index} className="card mb-5 border-0 rounded-4 w-100 shadow-lg">
              <div className="card-header bg-white border-0 d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center">
                <div>
                  <h5 className="fw-semibold mb-1">
                    Booking Date & ID:{" "}
                    <span className="fw-normal text-muted">
                      {Data.bookingDate} - {Data.orderNum}
                    </span>
                  </h5>
                </div>
                <button className="btn btn-danger mt-3 mt-sm-0">
                  <FontAwesomeIcon icon={faBan} className="me-2" />
                  Delete Booking History
                </button>
              </div>

              <div className="card-body border-top">
                <div className="row g-4 w-100">
                  {/* Service Address */}
                  <div className="col-md-4">
                    <h6 className="fw-semibold mb-2">Service Address</h6>
                    <p className="text-muted mb-0 small">
                      {parsedAddress.name}
                      <br />
                      {parsedAddress.addressLine1}
                      <br />
                      {parsedAddress.city} {parsedAddress.state}{" "}
                      {parsedAddress.pincode}
                      <br />
                      Mobile No: {parsedAddress.mobileNo}
                    </p>
                  </div>

                  {/* Payment Overview */}
                  <div className="col-md-4">
                    <h6 className="fw-semibold mb-2">Payment Overview</h6>
                    <div className="d-flex align-items-center text-success mb-1">
                      {Data?.paymentGateway === "CASH" ? (
                        <>
                          <span className="fw-bold">
                            <FontAwesomeIcon icon={faMoneyBills} size="lg" />
                          </span>
                          <span className="ms-2 small ">Cash payment</span>
                        </>
                      ) : (
                        <>
                          <span className="fw-bold">
                            <FontAwesomeIcon icon={faCreditCardAlt} size="lg" />
                          </span>
                          <span className="ms-2 small ">Online payment</span>
                        </>
                      )}
                    </div>
                    <div className="text mb-1 ">{Data.paymentId}</div>
                    <div>
                      {`Subtotal :  ${Data.currency === "USD" ? "$" : "₹"}${
                        Data.amount
                      }`}
                      <p className="mb-0 fw-medium">
                        {`Total : ${Data.currency === "USD" ? "$" : "₹"}${
                          Data.amount
                        }`}
                      </p>
                    </div>
                  </div>

                  {/* Current Status */}
                  <div className="col-md-4">
                    <h6 className="fw-semibold mb-2">Current Status</h6>
                    <span
                      className='badge text-dark px-3 py-2'
                      style={{ backgroundColor: ORDER_STATUS_COLOR[Data.orderStatus] || "transparent",
                       }}
                    >
                      <FontAwesomeIcon icon={faClock} className="me-1" color={ORDER_STATUS_TEXT_COLOR[Data.orderStatus]}/>
                      <span style={{color:ORDER_STATUS_TEXT_COLOR[Data.orderStatus]}}>
                      {ORDER_STATUS_MAP[Data.orderStatus] || "UNKNOWN STATUS"}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="card-footer bg-light border-top py-4 d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-3 w-100">
                <img
                  src={
                    Data?.doctorImage
                      ? IMG_BASE_URL + Data?.doctorImage
                      : unavailable
                  }
                  className="rounded-circle border border-2 border-primary"
                  width="90"
                  height="90"
                />
                <div>
                  <h5 className="fw-bold mb-1">{Data.doctorName}</h5>
                  <p className="text-muted small mb-2">
                    Specialization: {Data.doctorCategory}
                  </p>
                  <p className="fw-bold text-primary mb-1">
                    Service Fee: ₹{Data.amount}
                  </p>
                  <p className="small text-muted mb-0">
                    Scheduled: {Data.bookingDate} at {Data.startTime}
                  </p>
                </div>
              </div>
            </div>
          );
        }

        // ----------------- CARD TYPE 2 -----------------
        else {
          return (
            <div
              key={index}
              className="card shadow-sm mb-5 border-0 rounded-3 w-100 shadow-lg"
            >
              <div className="card-header bg-white border-0 d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center">
                <div>
                  <h5 className="fw-semibold mb-1">
                    Booking Date & ID:{" "}
                    <span className="fw-normal text-muted">
                      {Data.date} - {Data.orderNum}
                    </span>
                  </h5>
                </div>
                <button className="btn btn-danger mt-3 mt-sm-0">
                  <FontAwesomeIcon icon={faBan} className="me-2" />
                  Delete Booking History
                </button>
              </div>

              <div className="card-body border-top">
                <div className="row g-4 w-100">
                  {/* Service Address */}
                  <div className="col-md-4">
                    <h6 className="fw-semibold mb-2">Service Address</h6>
                    <p className="text-muted mb-0 small">
                      {parsedAddress.name}
                      <br />
                      {parsedAddress.addressLine1}
                      <br />
                      {parsedAddress.city}, {parsedAddress.state},{" "}
                      {parsedAddress.pincode}
                      <br />
                      Mobile No: {parsedAddress.mobileNo}
                    </p>
                  </div>

                  {/* Payment Overview */}
                  <div className="col-md-4">
                    <h6 className="fw-semibold mb-2">Payment Overview</h6>
                    <div className="d-flex align-items-center text-success mb-1">
                      {Data?.paymentGateway === "CASH" ? (
                        <>
                          <span className="fw-bold">
                            <FontAwesomeIcon icon={faMoneyBills} size="lg" />
                          </span>
                          <span className="ms-2 small ">Cash payment</span>
                        </>
                      ) : (
                        <>
                          <span className="fw-bold">
                            <FontAwesomeIcon icon={faCreditCardAlt} size="lg" />
                          </span>
                          <span className="ms-2 small ">Online payment</span>
                        </>
                      )}
                    </div>
                    <div className="text mb-1 ">{Data.paymentId}</div>
                    <div>
                      {`Subtotal :  ${Data.currency === "USD" ? "$" : "₹"}${
                        Data.amount
                      }`}
                      <p className="mb-0 fw-medium">
                        {`Total : ${Data.currency === "USD" ? "$" : "₹"}${
                          Data.amount
                        }`}
                      </p>
                    </div>
                  </div>

                  {/* Current Status */}
                  <div className="col-md-4">
                    <h6 className="fw-semibold mb-2">Current Status</h6>
                    <span
                      className='badge  text-dark px-3 py-2'
                        style={{ backgroundColor: ORDER_STATUS_COLOR[Data.orderStatus] || "transparent",
                       }}
                    >
                      <FontAwesomeIcon icon={faClock} className="me-1" color={ORDER_STATUS_TEXT_COLOR[Data.orderStatus]} />
                      <span style={{color:ORDER_STATUS_TEXT_COLOR[Data.orderStatus]}}>{ORDER_STATUS_MAP[Data.orderStatus] || "UNKNOWN STATUS"}</span>
                      
                    </span>
                  </div>
                </div>
              </div>

              {/* Services Section */}
              <div className="card-footer bg-white border-top py-2 ">
                <div
                  className="g-4 w-100 d-flex px-2 pb-2"
                  style={{
                    overflowX: "auto",
                    whiteSpace: "nowrap",
                    scrollbarWidth: "none",
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  {Data.details?.map((Servicelist, sidx) => (
                    <div
                      key={sidx}
                      style={{
                        minWidth: "260px",
                        maxWidth: "300px",
                        flexShrink: 0,
                      }}
                    >
                      <div className="border rounded-3 p-4 h-100 d-flex flex-column justify-content-between bg-light">
                        <div>
                          <h6 className="fw-bold mb-2">{Servicelist.title}</h6>
                          <p className="fw-bold text-primary mb-0">
                            Service Fee: ₹ {Servicelist.price || 1580}
                          </p>
                        </div>
                        <button className="btn btn-primary w-100 mt-3">
                          <FontAwesomeIcon icon={faDownload} className="me-2" />
                          <span className="">Download Report</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        }
      })}

     


      {/* ASSISTANCE SECTION */}
      <div className="card shadow-lg bg-light border-0 rounded-3 text-center p-4 w-100">
        <h3 className="fw-semibold mb-3">Need Assistance?</h3>
        <p className="text-muted mx-auto mb-4" style={{ maxWidth: "600px" }}>
          Our dedicated concierge team is here to ensure a seamless experience.
          Reach out to us for any questions or support you may need.
        </p>
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
          <a href="#" className="btn btn-primary px-4">
            <FontAwesomeIcon icon={faComments} className="me-2" />
            Chat with Support
          </a>
          <a href="tel:9321775857" className="btn btn-outline-info px-4">
            <FontAwesomeIcon icon={faPhone} className="me-2" />
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;


