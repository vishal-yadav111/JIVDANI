/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import apiHelper from "../../apiHelper";
import { GETALLMASTERVISITPADSBUTD, USER_INFO } from "../../Constant";
import { faFileAlt, faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Prescription = () => {
        
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [allVisits, setAllVisits] = useState([]);
  const getAllVisits = async () => {

    // if (!) {
    //   setAllVisits([]);
    //   return [];
    // }

    setLoading(true);

    try {
  const userData = localStorage.getItem(USER_INFO);
  const profiledata = JSON.parse(userData);

      const data = {
        customerId: profiledata?.customerId,
      };
      const response = await apiHelper(GETALLMASTERVISITPADSBUTD, data);
      const apiResData = response?.respData?.respMsg;
      const sortedData = apiResData?.sort((a, b) => b?.date - a?.date);
console.log('data coming for visit',response)
      if (sortedData?.length === 0) {
        setAllVisits([]);
        return;
      }

      if (response?.respData?.respMsg === "done") {
        setAllVisits([]);
      } else {
        setAllVisits(sortedData);
      }
    } catch (err) {
      setAllVisits([]);
      console.log('error is',err)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllVisits();
  }, []);


  return (
    <div className="card rounded-2 bg-white shadow-sm p-2">
      <div className="table-responsive" style={{ maxHeight: "70vh" }}>
        <table className="table table-striped table-hover mb-0 table-sm ">
          <thead className="table sticky-top">
            <tr>
              <th className="text-center" style={{ width: "12%" }}>
                UHID
              </th>
              <th className="text-center" style={{ width: "15%" }}>
                Token Id
              </th>

              <th className="text-center" style={{ width: "12%" }}>
                Date
              </th>

              <th className="text-center" style={{ width: "15%" }}>
                Prescription Print
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="8" className="text-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div className="mt-2">Loading visits...</div>
                </td>
              </tr>
            ) :allVisits && allVisits.length > 0 ? (
              allVisits.map((item) => {
                const debitAmount =
                  (item?.ipdPayments?.grossTotal || 0) -
                  (item?.ipdPayments?.discountAmount || 0);
                const creditAmount =
                  (item?.ipdPayments?.amountPaid || 0) +
                  (item?.ipdPayments?.sanctionAmount || 0);

                return (
                  <tr key={item?.id} style={{ verticalAlign: "middle" }}>
                    <td className="fw-bold  text-center py-2">
                      {item?.customerId || item?.customerId || "N/A"}
                    </td>
                    <td className="text-center">{item?.tokenId}</td>

                    <td className="text-center">
                      {moment(item?.date).format("DD-MM-YYYY")}
                    </td>
                    <td colSpan="8" className="text-center text-muted">
                      <button
                        className="btn btn-sm btn-outline-primary  my-2"
                        onClick={() =>
                          navigate("/Report", {
                            state: {
                              receivedData: item,
                              selectedLanguages: "en",
                              customer: item?.customerId,
                            },
                          })
                        }
                      >
                        <FontAwesomeIcon icon={faPrint} />
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-5 text-muted">
                  <FontAwesomeIcon
                    icon={faFileAlt}
                    size="3x"
                    className="mb-3 opacity-50"
                  />
                  <div>No visits found</div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Prescription;
