/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import './Login.css'
import { useState } from "react";
// import { GoogleLogin } from "@react-oauth/google";
// import jwt_decode from "jwt-decode";

// import Select from "react-select";
import { useEffect } from "react";
import {
 
  USER_ROLE,
  SESSION_ID,
  USER_INFO,
  CUSTOMER_ID,
  BASE_URL,
  GET_CART_COUNT,
  DEBUG_LOG_ENABLED,
  DOCTOR_ID,
 
  PASSWORD,
  ROLE,
  generateSmsLocalOtp,
  CART_COUNT,
  USER_ROLE_CHANGES_BUTTON,
  ERROR_MSG,
  OTP,
  EMPLOYEE_OR_DOCTOR,
  GetTransKey,
  ACCESS_TOKEN,
} from "../Constant";
// import {ACCESS_TOKEN} from '../Constant'
import axios from "axios";
// import { increment, handleLoggin } from "../actions";
// import { useDispatch } from "react-redux";
// import swal from "sweetalert";
// import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
// import { setUserData } from "../reducer/userSlice";
// import { Color } from "../report/visitConstant/Color";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPersonFalling,
//   faUser,
//   faUserDoctor,
// } from "@fortawesome/free-solid-svg-icons";
// import ToastFist from "../report/Toast/ToastFist";



// const BASE_URL = "http://68.178.169.188:8888/jivdani-dev/";
// const GET_CART_COUNT = "getCartCount";
// const GetTransKey = "GetTransKey";


export default function Login() {

  const [loginType, setLoginType] = useState(OTP); // "otp" | "employee"
  useEffect(() => {
    const savedType = sessionStorage.getItem("loginType");
    if (savedType) {
      setLoginType(savedType);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("loginType", loginType);
  }, [loginType]);

 
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({
    username: "",
    password: "",
    idToken: "",
    mobileNo: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setCustomer({ ...customer, [e.target.name]: value });
    console.log(value)
    console.log(e.target.name)
  };
  

  const loginCustomer = (e) => {
    e.preventDefault();
    console.log('login function callesd:');
    if (customer.mobileNo === "") {
      // setColorStatus(3);
      // setToastMsg("Please enter mobile number");
      // setShowToast(true);
      alert("mobile no cannot empty");
      
    } else {
      generateOtp(customer.mobileNo);
    }
  };

  const sessionId = localStorage.getItem(SESSION_ID);

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
      // setColorStatus(0);
      // setToastMsg(ERROR_MSG);
      // setShowToast(true);
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
      // setColorStatus(0);
      // setToastMsg(ERROR_MSG);
      // setShowToast(true);
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
      // const userData = {
      //   user: respMsg,
      //   role: respMsg?.role,
      // };
      // dispatch(setUserData(userData));
      localStorage.setItem(DOCTOR_ID, respMsg?.doctorId);
      localStorage.setItem(USER_ROLE_CHANGES_BUTTON, respMsg?.role);

      localStorage.setItem("is_Login", true);
      // dispatch(handleLoggin(true));
      navigate("/", { replace: true });
    } catch (err) {
      // setColorStatus(0);
      // setToastMsg(ERROR_MSG);
      // setShowToast(true);
    }
  };
  const loginData = async (username, password, idToken) => {
    localStorage.setItem(PASSWORD, password);

    try {
      const loginData = JSON.stringify({
        pubInfo: {
          sessionId: sessionId,
        },
        request: {
          busiParams: {
            username: username,
            password: password,
            idToken: idToken,
          },
          isEncrypt: false,
          transactionId: "897987987989",
        },
      });

      let response = await axios.post(BASE_URL + "login", loginData, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
          "Access-Control-Allow-Headers": "Content-Type",
          "Content-Type": "application/json",
          // Authorization: "Bearer " + access_token,
        },
      });

      // setData(response.data.respData.respMsg);
      const res = response?.data?.respData?.respMsg;
      if (typeof res === "object" && res !== null) {
        storeData(res);
      } else {
        // setColorStatus(3);
        // setToastMsg("Google login failed");
        // setShowToast(true);
      }
    } catch (err) {
      // setColorStatus(0);
      // setToastMsg(ERROR_MSG);
      // setShowToast(true);
    }
  };

  const generateOtp = async (mobileNo) => {
    console.log('generate otp function called')
    try {
      const DataOtp = JSON.stringify({
        pubInfo: {
          // sessionId: localStorage.getItem(SESSION_ID),
               sessionId: "75560FD08CBB75770F88E741817363B6",
   },

        
        request: {
          busiParams: {
            username: mobileNo,
            // password: "",
          },
          isEncrypt: false,
          transactionId: "897987987989",
        },
      });
// console.log("session id:",sessionId)
      const res = await axios.post(
        BASE_URL + generateSmsLocalOtp,
        //  "   https://jivdanihospital.com/jivdani-v1/generateSmsLocalOtp",
        DataOtp,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
            "Access-Control-Allow-Headers": "Content-Type",
            "Content-Type": "application/json",
            //  Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
              Authorization: "Bearer " + "eyJET0NUT1IiOiJkb2N0b3IiLCJzdWIiOiJkcmphbmFyZGFubXVra3VAZ21haWwuY28iLCJpYXQiOjE3NTcyMjEzNzAsImV4cCI6MTc1OTI0OTM3MH0",
             
          },
        }
      );
console.log("acess token:",ACCESS_TOKEN)
      // OtpSuccess();
      res.data.respData.code === 0
      ? alert("OTP has been not sent ")
      : OtpSuccess();

      console.log("response code",res.data.respData.code)

    } catch (error) {
      if (error.response.status === 404) {
        OtpSuccess();
      } else {
        // alert(error);
        // swal(ERROR_MSG);
      }
    }
  };

  const OtpSuccess = () => {
    let mobile = customer.mobileNo;
     console.log("mobile no:",mobile)
    navigate("/Otp", { state: { mobile: mobile } });
   

    // swal(res.data.respData.message);
  };

  return (
    <section className=" py-4 px-2  mb-5">
      {/* <ScrollToTopOnMount /> */}
      <div className="container  " style={{ marginTop: 45 }}>
        <div className="card rounded-3 text-black">
          <div className="row  ">
            {/* <LoginScrollpages /> */}
            <div className="col-md-6 col-lg-6 col-xl-4 offset-xl-1">
              <div className="card-body ">
                <div className="d-flex justify-content-center mb-4">
                  {/* <div style={{ width: "200px" }}>
                    <Select
                      options={loginOptions}
                      value={loginOptions.find(
                        (opt) => opt.value === loginType
                      )}
                      onChange={(selected) => setLoginType(selected.value)}
                      isSearchable={false}
                      components={{
                        IndicatorSeparator: () => null, // 🔹 removes the vertical line before arrow
                      }}
                      styles={{
                        control: (base) => ({
                          ...base,
                          boxShadow: "none",
                          borderColor: "#ced4da",
                          borderRadius: "8px", // rounded select box
                          "&:hover": { borderColor: Color.primary }, // border color on hover
                          fontWeight: "bold",
                        }),
                        singleValue: (base) => ({
                          ...base,
                          color: Color.primary, // 🔹 change selected value color here
                          fontWeight: "bold", // keep it bold
                        }),
                        menu: (base) => ({
                          ...base,
                          borderRadius: "8px", // rounded dropdown
                          marginTop: 4,
                        }),
                        option: (base, state) => ({
                          ...base,
                          margin: 0,
                          fontWeight: "bold", // bold options
                          backgroundColor: state.isSelected
                            ? Color.lightPrimary
                            : state.isFocused
                            ? "#e9ecef"
                            : "white",
                          color: state.isSelected ? "black" : "black",
                          // borderRadius: "8px", // rounded individual options
                          padding: "8px ",
                        }),
                      }}
                    />
                  </div> */}
                  <p className="fs-4 fw-bold mb-0 text-center">{loginType}</p>
                  <button
                    className="btn btn-sm bg border rounded-circle ms-3"
                    style={{ cursor: "default" }}
                    onClick={() => {
                      setLoginType(
                        loginType === OTP ? EMPLOYEE_OR_DOCTOR : OTP
                      );
                    }}
                  >
                    {/* <FontAwesomeIcon icon={faUserDoctor} className="fs-4" /> */}
                  </button>
                </div>

                {loginType == OTP ? (
                  <form className="">
                    <div className="form-outline mb-5">
                      <label
                        className="form-label fw-medium"
                        htmlFor="form2Example11"
                      >
                        Mobile Number
                      </label>
                      <input
                        name="mobileNo"
                        onChange={(e) => handleChange(e)}
                        value={customer.mobileNo}
                        className="form-control border border-primary mb-3 fw-medium"
                        placeholder="Enter mobile number"
                        // required
                        // aria-required="true"
                        // type="tel"
                        // size="10"
                        // minlength="10"
                        // maxlength="10"
                      />
                    </div>
                    <div className="d-grid gap-2">
                      <button
                        onClick={loginCustomer}
                        type="submit"
                        className="btn btn-primary fw-bold"
                     >
                        Login
                      </button>
                    </div>
                  </form>
                ) : (
              <div></div>
                  
                )}

                {loginType === OTP && (
                  <>
                    <div className="py-4 d-flex align-items-center">
                      <div className="flex-grow-1">
                        <hr />
                      </div>
                      <span className="px-2 ">OR</span>
                      <div className="flex-grow-1">
                        <hr />
                      </div>
                    </div>

                    <div className=" d-flex justify-content-center  pt-4">
                      {/* <GoogleLogin
                        onSuccess={(credentialResponse) => {
                          loginData("", "", credentialResponse.credential);
                        }}
                        onError={() => {
                          // setColorStatus(3);
                          // setToastMsg("Google login failed");
                          // setShowToast(true);
                        }}
                      /> */}
                    </div>
                  </>
                )}
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
