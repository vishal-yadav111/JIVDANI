import axios from "axios";

// import {
 
 
// } from "../../../Constant";
import { ACCESS_TOKEN ,
  addNewDataForAll,
  BASE_URL,
  SESSION_ID,
  } from "../Constant";

export const AddEditAll = async ({ categoryId, name,id}) => {
  // console.log(data, ' comign from addmedicin')
  try {
    const payload = {
      pubInfo: { sessionId: localStorage.getItem(SESSION_ID) },
      request: {
        busiParams: {
            categoryId: categoryId,
            id:id,
            name:name
          // contents: content ?? data?.contents,
          // active: true,
        },
        isEncrypt: false,
        transactionId: "897987987989",
      },
    };

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
     console.log(payload, "request ");
    console.log(response, " comfing from EDIt all medicine ");
    return true;
  } catch (error) {
    console.log(error, " coming from category data");
    return false;
  }
};
export const fetchCategoryData = async ({categoryId}) =>{
  try{
    const payload ={
      pubInfo : {sessionId : localStorage.getItem(SESSION_ID)},
      request: {
        busiParams :{
          categoryId: categoryId,
        }
      },
      isEncrypt: false,
      transactionId: "897987987989",
    };

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
    return response.data;
  }catch(error){
    console.log(error, " fetch data by category");
    return false;
  }
}