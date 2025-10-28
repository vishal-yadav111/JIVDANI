/* eslint-disable no-unused-vars */
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";


import {
  SESSION_ID,
  BASE_URL,
  CUSTOMER_ID,
  DOCTOR_ID,
  USER_ROLE,
  ACCESS_TOKEN,
  USER_INFO,
  GET_CART_COUNT,
  DEBUG_LOG_ENABLED,
  PASSWORD,
  ROLE,
  validateSmsLocalOtp,
  CART_COUNT,
  USER_ROLE_CHANGES_BUTTON,
  GetTransKey,
  ERROR_MSG,
} from "../Constant";


import { useDispatch } from "react-redux";
import axios from "axios";
// import { increment, handleLoggin } from "../actions";
// import { setUserData } from "../reducer/userSlice";
// import ToastFist from "../report/Toast/ToastFist";

export default function Otp() {

  const navigate = useNavigate();
  const location = useLocation();
  const [showToast, setShowToast] = useState(false);
  const [colorStatus, setColorStatus] = useState(3);
  const [toastMsg, setToastMsg] = useState("");
  const username = location?.state?.mobile;
  console.log("username",username)
  // const [data, setData] = useState({});
  const [customer, setCustomer] = useState({
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setCustomer({ ...customer, [e.target.name]: value });
  };

  const loginCustomer = (e) => {
    e.preventDefault();
    if (customer.password === "") {
      // setColorStatus(3);
      // setToastMsg("Please enter OTP");
      // setShowToast(true);
      alert("otp empty");
    } else {
      validateOtp(customer.password);
    }
  };
  let sessionId = localStorage.getItem(SESSION_ID);

  const getCartCountData = async (cstId, access_token) => {
    try {
      const getCartCountData = JSON.stringify({
        pubInfo: {
          sessionId: sessionId,
        },
        request: {
          busiParams: {
            customerId: cstId,
          },
          isEncrypt: false,
          transactionId: "897987987989",
        },
      });

      localStorage.setItem(ACCESS_TOKEN, access_token);
      let res = await axios.post(BASE_URL + GET_CART_COUNT, getCartCountData, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
          "Access-Control-Allow-Headers": "Content-Type",
          "Content-Type": "application/json",
          Authorization: "Bearer " + access_token,
        },
      });

      const data = res?.data?.respData?.respMsg;
      // dispatch(increment(data?.cartCount || 0));
      localStorage.setItem(CART_COUNT, data?.cartCount || 0);
    } catch (err) {
      setColorStatus(0);
      setToastMsg(ERROR_MSG);
      setShowToast(true);
    }
  };
  const getTransKeyData = async (accessToken) => {
    try {
      const transKeyData = JSON.stringify({
        pubInfo: {
          sessionId: "",
        },
        request: {
          busiParams: {
            key: "",
            type: 0,
          },
          isEncrypt: false,
          transactionId: "897987987989",
        },
      });
      // const response = await TransKey.create(transKeyData);
      let response = await axios.post(BASE_URL + GetTransKey, transKeyData, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
          "Access-Control-Allow-Headers": "Content-Type",
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      });
      localStorage.setItem(
        SESSION_ID,
        response.data.respData.respMsg.sessionId
      );
    } catch (err) {
      setColorStatus(0);
      setToastMsg(ERROR_MSG);
      setShowToast(true);
    }
  };
  const storeData = async (respMsg) => {
    try {
      if (respMsg) {
        getTransKeyData(respMsg?.accessToken);
        getCartCountData(respMsg?.customerId, respMsg?.accessToken);
      }
      localStorage.setItem(ACCESS_TOKEN, respMsg?.accessToken);
      localStorage.setItem(CUSTOMER_ID, respMsg?.customerId);
      localStorage.setItem(USER_INFO, JSON.stringify(respMsg));
      localStorage.setItem(USER_ROLE, respMsg?.role);
      const userData = {
        user: respMsg,
        role: respMsg?.role,
      };
      alert("login sucess")
      // dispatch(setUserData(userData));
      // localStorage.setItem(DOCTOR_ID, respMsg?.doctorId);
      // localStorage.setItem(USER_ROLE_CHANGES_BUTTON, respMsg?.role);

      // localStorage.setItem("is_Login", true);
      // dispatch(handleLoggin(true));
      navigate("/", { replace: true });
    } catch (err) {
      setColorStatus(0);
      setToastMsg(ERROR_MSG);
      setShowToast(true);
    }
  };

  const validateOtp = async (password) => {
    try {
      const validateSmsOtpData = JSON.stringify({
        pubInfo: {
          // sessionId: sessionId,
              sessionId: "75560FD08CBB75770F88E741817363B6",
        },
        request: {
          busiParams: {
            username: username,
            otp: password,
            fcmToken: "",
          },
          isEncrypt: false,
          transactionId: "897987987989",
        },
      });
      console.log({username,password})

      const response = await axios.post(
        BASE_URL + validateSmsLocalOtp,

        validateSmsOtpData,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
            "Access-Control-Allow-Headers": "Content-Type",
            "Content-Type": "application/json",
          },
        }
      );

      const res = response?.data?.respData?.respMsg;
      if (typeof res === "object" && res !== null) {
        storeData(res);
      } else {
        // setColorStatus(3);
        // setToastMsg("Entered OTP is invalid");
        // setShowToast(true);
        alert("entered OTP is invalid")
      }
    } catch (error) {
      // alert(error);
      console.log("error",error);
      setColorStatus(3);
      setToastMsg("Entered OTP is invalid");
      setShowToast(true);

    }
  };

  return (
    <section className="py-4 px-2  mb-5">
      <div className="container  mt-5">
        <div className="row ">
          <div className="card rounded-3 text-black ">
            <div className="row ">
              {/* <LoginScrollpages /> */}
              <div className="col-md-6 col-lg-6 col-xl-6 offset-xl">
                <div className="card-body P-5 ">
                  <div className="text-center">
                    <h4 className="mt-1 fw-bold mb-5 ">OTP</h4>
                  </div>
                  <form>
                    <div
                      className="form-outline mb-4 mx-auto "
                      style={{ maxWidth: "400px" }}
                    >
                      <h5> Verify your mobile number </h5>
                      <p>Enter OTP sent to {username} mobile number</p>

                      <input
                        name="password"
                        onChange={(e) => handleChange(e)}
                        value={customer.password}
                        style={{ maxWidth: "400px" }}
                        className="form-control border border-primary mt-4 mx-auto"
                        placeholder="OTP No....."
                        required
                        aria-required="true"
                        type="tel"
                        size="6"
                        // minlength="6"
                        // maxlength="6"
                      />
                    </div>
                    {/* <p className="text-end">Resend OTP</p> */}

                    <div
                      className="d-grid gap-2 mt-2 text-bottam mx-auto"
                      style={{ maxWidth: "400px" }}
                    >
                      <button
                        type="button"
                        className=" btn  btn-block btn-primary mx-1 rounded-2"
                        style={{ marginBottom: 10, marginTop: 50 }}
                        onClick={loginCustomer}
                      >
                        OTP Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ToastFist
        showToast={showToast}
        setShowToast={setShowToast}
        title="Login Alert"
        message={toastMsg}
        duration="Just now"
        status={colorStatus}
      /> */}
    </section>
  );
}


