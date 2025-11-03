import axios from "axios";
import { ACCESS_TOKEN ,
  addNewDataForAll,
  BASE_URL,
  ITEM_STATUS_CHANGE,
  SESSION_ID,
  } from "../Constant";

export const AddEditAll = async ({ categoryId, name, id}) => {
  try {
    const payload = {
      pubInfo: { sessionId: localStorage.getItem(SESSION_ID) },
      request: {
        busiParams: {
            categoryId: categoryId,
            // id:id,
            name:name
        },
        isEncrypt: false,
        transactionId: "897987987989",
      },
    };
    
     if (id !== undefined && id !== null && id !== "") {
      payload.request.busiParams.id = id;
    }


    
       
    // eslint-disable-next-line no-unused-vars
    const response = await axios.post(
      BASE_URL + addNewDataForAll,
      JSON.stringify(payload),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
        },
      }
    );

    return true;
  } catch (error) {
    console.log(error, " coming from category data");
    return false;
  }
};