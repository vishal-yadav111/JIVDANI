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
    console.log(payload, "request ");
    console.log(response, " comfing from EDIt all medicine ");
    return true;
  } catch (error) {
    console.log(error, " coming from category data");
    return false;
  }
};




// export const fetchCategoryData = async ({categoryId}) =>{
//   try{
//     const payload ={
//       pubInfo : {sessionId : localStorage.getItem(SESSION_ID)},
//       request: {
//         busiParams :{
//           categoryId: categoryId,
//         }
//       },
//       isEncrypt: false,
//       transactionId: "897987987989",
//     };

//     const response = await axios.post(
//       BASE_URL + addNewDataForAll,
//       JSON.stringify(payload),
//        {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
//         },
//       }
//     );
//     return response.data;
//   }catch(error){
//     console.log(error, " fetch data by category");
//     return false;
//   }
// }


// export const deleteItem = async (categoryId, id) => {
//   try {
//     const payload = {
//       pubInfo: { sessionId: localStorage.getItem(SESSION_ID)},
//       request: {
//         busiParams: {
//            categoryId : categoryId,
//            id : id
//           },
//         isEncrypt: false,
//         transactionId: "897987987989",
//       },
//     };
//     const res = await axios.post(
//       BASE_URL+ ITEM_STATUS_CHANGE,
//       JSON.stringify(payload), 
//        {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
//         },
//       }
//     );
//     // console.log("Delete item response  : "+ res.data);
//     return true;
//   } catch (err) {
//     console.error("deleteItem error:", err);
//     return false;
//   }
// };