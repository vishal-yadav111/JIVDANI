import axios from "axios";

// import {
 
 
// } from "../../../Constant";
import { ACCESS_TOKEN , addMedicine,
  BASE_URL,
  SESSION_ID,
  } from "../Constant";

export const AddEditMedicine = async ({ data, content = null }) => {
  // console.log(data, ' comign from addmedicin')
  try {
    const payload = {
      pubInfo: { sessionId: localStorage.getItem(SESSION_ID) },
      request: {
        busiParams: {
          ...data,
          contents: content ?? data?.contents,
          active: true,
        },
        isEncrypt: false,
        transactionId: "897987987989",
      },
    };

    // eslint-disable-next-line no-unused-vars
    const response = await axios.post(
      BASE_URL + addMedicine,
      JSON.stringify(payload),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
        },
      }
    );
   //  console.log(response, " comfing from EDI");
    return true;
  } catch (error) {
    console.log(error, " coming from addMedicine");
    return false;
  }
};
