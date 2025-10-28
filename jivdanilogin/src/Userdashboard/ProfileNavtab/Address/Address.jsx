
import { useNavigate } from "react-router";
import swal from "sweetalert";
import React, { useState, useEffect } from "react";
import axios from "axios";
import No_data_found from "../No_data_found.svg"
import {
  ACCESS_TOKEN,
  BASE_URL,
  CUSTOMER_ID,
  DEBUG_LOG_ENABLED,
  SESSION_ID,
  addCustomerAddress,
  getCustomerAddressByUserId,
  removeCustomerAddress,
} from "../../Constant";
import { AddressForm } from "./AddressForm";
import { AddressCard } from "./AddressCard";

export const Address = () => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const navigate = useNavigate();

  // ✅ Fetch Addresses
  const fetchAddresses = async () => {
    try {
      const customerId = localStorage.getItem(CUSTOMER_ID);
      const customerData = JSON.stringify({
        pubInfo: { sessionId: localStorage.getItem(SESSION_ID) },
        request: { busiParams: { customerId }, isEncrypt: false, transactionId: "897987987989" },
      });

      const response = await axios.post(BASE_URL + getCustomerAddressByUserId, customerData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
        },
      });

      const apiAddresses =
        response?.data?.respData?.respMsg?.map((a) => ({
          id: a.id || a.addressId, // ✅ FIXED
          name: a.name || "",
          fatherName: a.country || "",
          dob: a.landmark || "",
          purpose: a.purpose || "",
          addressLine1: a.addressLine1 || "",
          mobileNo: a.mobileNo || "",
          city: a.city || "",
          state: a.state || "",
          pincode: a.pincode || "",
          landmark: a.landmark || "",
          country: a.country || "",
          isDefault: a.defaultAddress || false,
        })) || [];

      setAddresses(apiAddresses);
    } catch (err) {
      console.error("Error fetching addresses:", err);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  // ✅ Save or Update
  const saveAddress = async (formData) => {
    try {
      const customerId = localStorage.getItem(CUSTOMER_ID);
      const customerData = JSON.stringify({
        pubInfo: { sessionId: localStorage.getItem(SESSION_ID) },
        request: {
          busiParams: {
              id: formData.id || formData.addressId,
            customerId,
            addressId: formData.id || null,
            name: formData.name,
            addressLine1: formData.addressLine1,
            city: formData.city,
            state: formData.state,
            purpose: formData.purpose,
            country: formData.country,
            pincode: formData.pincode,
            landmark: formData.landmark,
            mobileNo: formData.mobileNo,
            defaultAddress: formData.isDefault,
          },
          isEncrypt: false,
          transactionId: "897987987989",
        },
      });

      const response = await axios.post(BASE_URL + addCustomerAddress, customerData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
        },
      });

      swal("Success", response.data.respData.message, "success");
      await fetchAddresses();

      // ✅ Clear selection after save
      setSelectedAddress(null);
    } catch (err) {
      if (err.response?.status === 401) navigate("/login");
      else swal("Error: " + err.message);
    }
  };

  // ✅ Delete Address
  const removeAddress = async (item) => {
    swal({
      title: "Are you sure?",
      text: "Do you want to delete this address?",
      icon: "warning",
      buttons: ["Cancel", "Yes"],
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const removeData = JSON.stringify({
            pubInfo: { sessionId: localStorage.getItem(SESSION_ID) },
            request: {
              busiParams: {
                customerId: localStorage.getItem(CUSTOMER_ID),
                addressId: item.id,
              },
              isEncrypt: false,
              transactionId: "897987987989",
            },
          });

          const response = await axios.post(BASE_URL + removeCustomerAddress, removeData, {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
            },
          });

          swal("Deleted", response.data.respData.message, "success");
          await fetchAddresses();
        } catch (err) {
          swal("Error: " + err.message);
        }
      }
    });
  };

  return (
    <div className="row g-4">
      {/* Address List */}
      <div
        className="col-lg-4"
        style={{ minheight: "250px",maxHeight:'650px' ,overflowY: "auto", scrollbarWidth: "none" }}
      >
        <h5 className="fw-bold mb-3">Saved Addresses</h5>
        {addresses.length === 0 ? (
         <div>
          <p className="text-muted">No address saved yet.</p>
           <img src={No_data_found} alt=""height={250} /></div>
        ) : (
          addresses.map((addr) => (
            <AddressCard
              key={addr.id}
              address={addr}
              onDelete={() => removeAddress(addr)}
              onSelect={() => setSelectedAddress(addr)}
            />
          ))
        )}
      </div>

      {/* Form Section */}
      <div className="col-lg-8">
        <AddressForm
          onSave={saveAddress}
          selectedAddress={selectedAddress}
          clearAfterSave
        />
      </div>
    </div>
  );
};
