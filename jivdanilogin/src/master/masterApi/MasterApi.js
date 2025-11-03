/* eslint-disable no-unused-vars */
import axios from "axios";


// import {   } from "../../../Constant";

// import { SEARCH_ALL_MASTER_BY_PAGINATION  } from "../../visitConstant/ApiConstant";
import { ACCESS_TOKEN ,BASE_URL, SEARCH_ALL_MASTER_BY_PAGINATION, SESSION_ID } from "../Constant";

export const MasterApi = async (catID, currentPage, searchKey = "A", rowsPerPage = 20, status = "true") => {
  //  console.log(currentPage - 1, rowsPerPage, ' lll')
    try {
        const payload = {
            pubInfo: { sessionId: localStorage.getItem(SESSION_ID) },
            request: {
                busiParams:{
                    categoryId: catID,
                    offset: currentPage - 1,
                    pageSize: rowsPerPage,
                    prefix: searchKey,
                    active: status,
                },
                isEncrypt: false,
                transactionId: '897987987989',
            },
        }
        const response = await axios.post(BASE_URL + SEARCH_ALL_MASTER_BY_PAGINATION, payload,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
                },
            });


        return response.data.respData.respMsg || [];

    } catch (error) {
        return false
    }
};