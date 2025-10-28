/* eslint-disable no-undef */



import swal from "sweetalert";
import React, { useState, } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEdit, faSignOut, } from "@fortawesome/free-solid-svg-icons";
import { ACCESS_TOKEN, BASE_URL, CUSTOMER_ID, DEBUG_LOG_ENABLED, deleteCustomer, SESSION_ID, UPDATE_CUSTOMER, USER_INFO } from "../Constant";
import { ProfileNavtab } from "../ProfileNavtab/ProfileNavtab";
import { Edituser } from "./Edituser";
import { useNavigate } from "react-router";
import axios from "axios";

export const ProfilePage = () => {



  const navigate = useNavigate();
  const userData = localStorage.getItem(USER_INFO);
  const profiledata = JSON.parse(userData);

  const [isEditing, setIsEditing] = useState(false);


  const [customer, setCustomer] = useState({
    customerId: profiledata?.customerId || "",
    name: profiledata?.name || "",
    emailId: profiledata?.emailId || "",
    mobileNo: profiledata?.mobileNo || "",
    doctorId: profiledata?.doctorId || "",
    role: profiledata?.role || "",

  });


  // Function to generate initials (for avatar circle)
  const getInitials = (fullName) => {
    if (!fullName) return "";
    const words = fullName.trim().split(" ");
    const initials = words.map((w) => w[0]?.toUpperCase()).join("");
    return initials.slice(0, 2);
  };


  const saveCustomer = async (updatedCustomer) => {
   
    if (
      updatedCustomer.name === "" ||
      updatedCustomer.emailId === "" ||
      updatedCustomer.mobileNo === ""
    ) {
      swal(" Please enter all fields ");
    } else {
      try {
        const customerData = JSON.stringify({
          pubInfo: {
            sessionId: localStorage.getItem(SESSION_ID),
          },
          request: {
            busiParams: {
              customerId: updatedCustomer.customerId,
              name: updatedCustomer.name,
              emailId: updatedCustomer.emailId,
              mobileNo: updatedCustomer.mobileNo,
              // password: localStorage.getItem(PASSWORD),
            },
            isEncrypt: false,
            transactionId: "897987987989",
          },
        });
 


        let response = await axios.post(
          BASE_URL + UPDATE_CUSTOMER,
          customerData,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
              "Access-Control-Allow-Headers": "Content-Type",
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
            },
          }
        );
        console.log("Response:", response.data);

        //  swal("Update successful  ");
        swal("success", "You Profile has been updated", "success");
        if (DEBUG_LOG_ENABLED) {
          //  console.log(response.data);
        }


        setCustomer(updatedCustomer);
        localStorage.setItem(USER_INFO, JSON.stringify(updatedCustomer));
        setIsEditing(false);
      } catch (err) {
        // console.log(err, " fff");
        if (err.response.status == 401) {
          navigate("/login");
        } else {
          swal("data : " + err);
          if (DEBUG_LOG_ENABLED) {
            console.log(err);
          }
        }
      }
    }
  };

  const DeleteAccount = async () => {
    try {
      const itemData = JSON.stringify({
        pubInfo: {
          sessionId: localStorage.getItem(SESSION_ID),
        },
        request: {
          busiParams: {
            customerId: localStorage.getItem(CUSTOMER_ID),
          },
          isEncrypt: false,
          transactionId: "897987987989",
        },
      });
      if (DEBUG_LOG_ENABLED) {
        // console.log("DeleteAccount : " + itemData);
      }

      let response = await axios.post(BASE_URL + deleteCustomer, itemData, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
          "Access-Control-Allow-Headers": "Content-Type",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
        },
      });

      swal(response.data.respData.message);
      localStorage.setItem(CUSTOMER_ID, " ");
      localStorage.setItem(ACCESS_TOKEN, " ");
      localStorage.setItem(USER_LOGIN, " ");
      dispatch(handleLoggin(false));
      dispatch(increment(0));
      navigate("/login");
    } catch (err) {
      if (err.response.status === 401) {
        localStorage.setItem(CUSTOMER_ID, "");
        navigate("/login");
      } else {
        swal("data : " + err);
        if (DEBUG_LOG_ENABLED) {
          console.log(err);
        }
      }









    }
  };

  const logoutUser = () => {
    swal({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      buttons: ["Cancel", "Logout"],
      dangerMode: true,
    }).then((willLogout) => {
      if (willLogout) {
        // localStorage.removeItem(CUSTOMER_ID);
        // localStorage.removeItem(ACCESS_TOKEN);
        // localStorage.removeItem(USER_INFO);
        // localStorage.removeItem(SESSION_ID);
        navigate("/login");
        swal("Logged out successfully!", { icon: "success" });
      }
    });
  };






  return (
    <div className="bg-light">
      <div className="container py-4 ">
        {!isEditing ? (
          <>
            {/* Patient Info Card */}
            <div className="card p-4 mb-4 shadow-sm">
              <div className="row align-items-center justify-content-center ">
                {/* Profile Avatar */}
                <div className="col-auto position-relative">
                  <div
                    className="profile-avatar d-flex align-items-center justify-content-center rounded-circle "

                  >

                    <style>{`.profile-avatar 
                    {
  width: 100px;
  height: 100px;
  background-color: rgba(154, 47, 254, 0.1);
  color: rgb(154, 47, 254);
  font-weight: bold;
  font-size: 2.5rem;
  border: 2px solid rgb(154, 47, 254);
  transition: all 0.3s ease; /* smooth resizing */}
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


                    {getInitials(customer.name) || <FontAwesomeIcon icon={faUser} />}
                  </div>

                </div>

                {/* Patient Info */}
                <div className="col">
                  <h3 className="fw-bold">{customer.name}</h3>
                  <p className="text-muted mb-1"><strong>Customer ID: </strong>{customer.customerId}</p>
                  <small className="text-muted">
                    <strong> Email:</strong> {customer.emailId}
                    <div ><strong>Mobile: </strong> {customer.mobileNo}</div>
                    {/* <div><strong>Role:</strong>{customer.role}</div> */}
                  </small>

                </div>

                {/* Edit Button */}
                <div className="col-auto py-2 d-flex gap-2">


                  <button
                    className="btn  btn-outline-primary d-flex align-items-center gap-2 "
                    onClick={() => setIsEditing(true)}
                    style={{ borderColor: "rgb(154,47,254)", borderRadius: '10px', border: '1px solid', fontWeight: 'bolder' }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                    <span className="d-none d-lg-inline " >Edit Profile</span>
                  </button>
                  <button
                    className="btn  btn-outline-danger d-flex align-items-center gap-2 "
                    onClick={() => logoutUser()}
                    style={{ borderRadius: '10px', border: '1px solid', fontWeight: 'bolder' }}
                  >
                    <FontAwesomeIcon icon={faSignOut} />
                    <span className="d-none d-lg-inline " >Logout</span>
                  </button>

                </div>

              </div>
            </div>



          </>
        ) : (
          <Edituser
            customer={customer}
            onSave={saveCustomer}
            onCancel={() => setIsEditing(false)}
          />)}
        <ProfileNavtab />
      </div>
    </div>
  );
};
