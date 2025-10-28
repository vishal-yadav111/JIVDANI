/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
// import AllBillList from "../../ipd_billing/Ipd_Billing/AllBillList";
// import { getFinancialYearByDate } from "../../utils/PrintUtils";
import apiHelper from "../../apiHelper";
import {
  fetchAllReportUrl,
  USER_INFO,

} from "../../Constant";
import {
 
  faFileAlt,

  
  faRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

import ViewAllTestReports from "./ViewAllTestreport";


const LabReports = () => {
  const [loading, setLoading] = useState(false);
  const [allReports, setAllReports] = useState([]);
  const [showReport, setShowReport] = useState(null);
  const getAllVisits = async () => {
    // if (!token) {
    //   setAllReports([]);
    //   return [];
    // }

    setLoading(true);

    try {
  const userData = localStorage.getItem(USER_INFO);
  const profiledata = JSON.parse(userData);

      const data = {
        mobileNo: profiledata?.mobileNo,
        offset: 0,
        pageSize: 10,
      };
      
      const response = await apiHelper(fetchAllReportUrl, data);
      const apiResData = response?.respData?.respMsg?.content;

      if (apiResData?.length === 0) {
        setAllReports([]);
        return;
      }

      if (response?.respData?.respMsg === "done") {
        setAllReports([]);
      } else {
        setAllReports(apiResData);
      }
    } catch (err) {
      setAllReports([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllVisits();
  }, []);

  return (
    <div className="card w-100 rounded-2 bg-white shadow-sm ">
      {!showReport ? (
        <div className="table-responsive p-2" style={{ maxHeight: "70vh" }}>
          <table className="table table-striped table-hover mb-0 table-sm ">
            <thead className="table sticky-top">
              <tr>
                <th className="text-center" style={{ width: "10%" }}>
                  Sr. No.
                </th>
                <th className="text-center" style={{ width: "15%" }}>
                  Token Id
                </th>

                <th className="text-center" style={{ width: "15%" }}>
                  Date
                </th>

                <th className="text-center" style={{ width: "15%" }}>
                  All Test Reports
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
                    <div className="mt-2">Loading reports...</div>
                  </td>
                </tr>
              ) : allReports?.length > 0 ? (
                allReports.map((item, index) => {
                  return (
                    <tr key={item?.id} style={{ verticalAlign: "middle" }}>
                      <td className="  text-center py-3">{index + 1}</td>
                      <td className="text-center">{item?.tokenId}</td>

                      <td className="text-center">
                        {moment(item?.date).format("DD-MM-YYYY")}
                      </td>
                      <td className="text-center">
                        <button
                          className="btn btn-outline-primary btn-sm "
                          onClick={() => setShowReport(item)}
                        >
                          View
                          <FontAwesomeIcon
                            icon={faRightLong}
                            className="ms-2"
                          />
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
                    <div>No reports found</div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
           
          <ViewAllTestReports
            token={showReport}
            onClose={() => setShowReport(null)}
          />
        </div>
      )}
    </div>
  );
};

export default LabReports;
