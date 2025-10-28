import React, { useEffect, useState } from "react";
import axios from "axios";
import { ACCESS_TOKEN, BASE_URL, CUSTOMER_ID, getCustomerAddressByUserId, SESSION_ID } from "../../Folder/Constant";


export const Adresslist = () => {
  const [customerAddress, setCustomerAddress] = useState([]);

  useEffect(() => {
    const customerId = localStorage.getItem(CUSTOMER_ID);

    const getAddressLists = async () => {
      try {
        const customerData = JSON.stringify({
          pubInfo: {
            sessionId: localStorage.getItem(SESSION_ID),
          },
          request: {
            busiParams: {
              customerId: customerId,
            },
            isEncrypt: false,
            transactionId: "897987987989",
          },
        });

        let response = await axios.post(
          BASE_URL + getCustomerAddressByUserId,
          customerData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
            },
          }
        );

        console.log("📌 API Response:", response.data);

        if (response?.data?.respData?.respMsg) {
          setCustomerAddress(response.data.respData.respMsg);
        }
      } catch (err) {
        console.error("❌ API Error:", err);
      }
    };

    getAddressLists();
  }, []);

  return (
    <div>
      {/* <h4>Customer Addresses</h4>
      {customerAddress.length > 0 ? (
        customerAddress.map((addr, index) => (
          <div key={index} className="card p-2 mb-2">
            <h6>{addr.name}</h6>
            <p>{addr.flat}, {addr.city}, {addr.state} - {addr.pin}</p>
            <p>Mobile: {addr.mobile}</p>
          </div>
        ))
      ) : (
        <p>No addresses found.</p>
      )} */}
    </div>
  );
};
