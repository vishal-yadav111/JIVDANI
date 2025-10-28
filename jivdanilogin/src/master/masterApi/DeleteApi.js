/* eslint-disable no-unused-vars */
import axios from "axios";

// import {   } from "../../../Constant";
// import { ITEM_STATUS_CHANGE } from "../../visitConstant/ApiConstant";
import { SESSION_ID ,ACCESS_TOKEN, BASE_URL, ITEM_STATUS_CHANGE,} from "../Constant";

export const DeleteApi = async (catID, itemID) => {
  try {
    const payload = {
      pubInfo: { sessionId: localStorage.getItem(SESSION_ID) },
      request: {
        busiParams: {
          categoryId: catID,
          id: itemID,
        },
        isEncrypt: false,
        transactionId: "897987987989",
      },
    };
    const response = await axios.post(BASE_URL + ITEM_STATUS_CHANGE, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
      },
    });

    return true;
  } catch (error) {
    return false;
  }
};
