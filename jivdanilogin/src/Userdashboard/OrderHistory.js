import ScrollToTopOnMount from "../components/ScrollToTopOnMount";

import {
  SESSION_ID,
  CUSTOMER_ID,
  BASE_URL,
  GET_OREDER_HISTORY,
  ACCESS_TOKEN,
  DEBUG_LOG_ENABLED,
  DOCTOR_ID,
  getOrderInfoByDate,
  USER_ROLE,
  ROLE,
  getCustomerAddressByUserId,
  ROLEDOCTOR,
} from "../Constant";
import { useState, useEffect } from "react";

import moment from "moment";

import { json, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import AccountMenu from "../profile/account-menu";
import OrderHistoryItem from "../order_history/OrderHistoryItem";

import axios from "axios";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import OrderHistoryItemDetail from "./OrderHistoryItemDetail";
import apiHelper from "../report/ApiHelpar/apiHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function OrderHistory() {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState(() => {
    const stored = sessionStorage.getItem("customer");
    return stored
      ? JSON.parse(stored)
      : {
          startdate: moment().subtract(1, "days").format("YYYY-MM-DD"),
          endtdate: moment().format("YYYY-MM-DD"),
        };
  });
  const [orderItemList, setOrderItemList] = useState([]);
  let [showEdit, setShowEdit] = useState(false);
  let [Enddate, setenddate] = useState(moment().format("YYYY-MM-DD"));
  let [Loader, setLoader] = useState(false);
  let [isLoading, setIsLoading] = useState(false);
  const isLogged = useSelector((state) => state.isLogged);

  const getOrdertLists = async () => {
    const customerId = localStorage.getItem(CUSTOMER_ID);
    const doctorId = localStorage.getItem(DOCTOR_ID);

    try {
      const payload = {
        // customerId: doctorId === "" || doctorId === "0" ? customerId : "",
        customerId: customerId,
        // doctorId: doctorId === "" || doctorId === "0" ? "" : doctorId,
      };

      const res = await apiHelper(GET_OREDER_HISTORY, payload);

      setOrderItemList(res?.respData?.respMsg?.morderInfoList);

      // console.log(res?.respData?.respMsg, "res");
    } catch (err) {
      if (err.response?.status === 401) {
        // navigate("/login");
      } else {
        swal("data : " + err);
        if (DEBUG_LOG_ENABLED) {
          console.log(err);
        }
      }
    } finally {
      setIsLoading(false);
      setLoader(false);
    }
  };

  const getOrderDate = async () => {
    try {
      const payload = {
        startDate:
          customer?.startdate ??
          moment().subtract(1, "days").format("YYYY-MM-DD"),
        endDate: customer?.endtdate ?? moment().format("YYYY-MM-DD"),
      };
      const res = await apiHelper("getOrderInfoByDate", payload);

      setOrderItemList(res?.respData?.respMsg?.morderInfoList);
      // console.log(res?.respData?.respMsg, "res orderjos");
    } catch (error) {
      swal("Something went wrong!");
    } finally {
      setIsLoading(false);
      setLoader(false);
    }
  };

  // Sync to sessionStorage on change
  useEffect(() => {
    sessionStorage.setItem("customer", JSON.stringify(customer));
  }, [customer]);

  useEffect(() => {
    const userRole = localStorage.getItem(USER_ROLE);
    if (userRole?.includes(ROLE)) {
      setShowEdit(true);
      getOrderDate();
    } else {
      getOrdertLists();
    }
    setIsLoading(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loginCustomer = () => {
    if ((customer.endtdate === "", customer.startdate === "")) {
      swal(" Please entery data  ");
    } else {
      // loginData(customer.username, customer.password, customer.idToken);
      setLoader(true);
      getOrderDate();
    }
  };

  return (
    <div className="container  px-xl-5">
      <div className="container py-4" style={{ paddingTop: "100px" }}>
        <div className="row g-3">
          {/* <div className="col-lg-3">
            <AccountMenu current="order-history" />
          </div> */}
          <div className="col">
            {showEdit ? (
              <div className="row g-2 mb-4">
                <div className="col-md">
                  <div className="form-floating">
                    <input
                      name="startdate"
                      type="date"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={customer.startdate}
                      required
                      aria-required="true"
                    />
                    <label htmlFor="floatingInputGrid">startDate </label>
                  </div>
                </div>
                <div className="col-md">
                  <div className="form-floating">
                    <input
                      name="endtdate"
                      type="date"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      // value={Enddate}
                      value={customer.endtdate}
                      required
                      aria-required="true"
                    />
                    <label htmlFor="floatingInputGrid">
                      EndtDate (current date)
                    </label>
                  </div>
                </div>
                <div className="col-md">
                  <div className="form-floating">
                    <button
                      onClick={loginCustomer}
                      type="submit"
                      className="btn btn-primary m-2 py-2"
                    >
                      Submit
                      {Loader && (
                        <FontAwesomeIcon
                          icon={faSpinner}
                          spin={true}
                          className="ms-1"
                        />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ) : null}

            {isLoading ? (
              <div className="d-flex justify-content-center fs-4 fw-medium text-primary min-vh-100">
                <FontAwesomeIcon
                  icon={faSpinner}
                  spin={true}
                  className="ms-1"
                />
              </div>
            ) : orderItemList?.length === 0 ? (
              isLogged ? (
                <div className="container py-4 fs-4 fw-medium">
                  Booking not found !
                </div>
              ) : (
                <div class="d-flex justify-content-center">
                  <div className=" text-center">
                    <h5 className="card-title">
                      To see your order history, please log in to your account.
                      Once you're logged in, you can access your order history
                      and track your past orders.
                    </h5>
                    <button
                      onClick={() => navigate("/login")}
                      type="submit"
                      className="btn btn-primary m-2 px-5"
                    >
                      login
                    </button>
                  </div>
                </div>
              )
            ) : (
              <div>
                {orderItemList?.map((it) => (
                  <>
                    {/* {showEdit ? (
                      <OrderHistoryItemDetail
                        id={it?.orderNum}
                        order={it.id}
                        product={it}
                        cancel={it.catType}
                        addressData={it?.address}
                        getOrderDate={getOrderDate}
                      />
                    ) : (
                      <OrderHistoryItem
                        id={it?.orderNum}
                        product={it}
                        // cancel={it.paymentType}
                        // addressData={filterByAddressId(addressList, it.addressId)}
                        addressData={it?.address}
                      />
                     
                    )} */}
                    <OrderHistoryItemDetail
                      id={it?.orderNum}
                      order={it.id}
                      product={it}
                      cancel={it.catType}
                      addressData={it?.address}
                      
                    />
                  </>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
