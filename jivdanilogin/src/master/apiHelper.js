import axios from "axios";
import { ACCESS_TOKEN, BASE_URL, SESSION_ID } from "./Constant";

// Create an Axios instance with default configurations
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
    "Access-Control-Allow-Headers": "Content-Type",
  },
});
const session = localStorage.getItem(SESSION_ID);

const apiHelper = async (endpoint, data = {}, config = {}) => {
  // console.log("apiHelper Data ====>", data);
  try {
    // Create the payload
    const payload = {
      pubInfo: {
        sessionId: session ? session : "8771EC6688917C648558DC3BDA709ADA",
      },
      request: {
        busiParams: { ...data },
        isEncrypt: false,
        transactionId: "897987987989", // Consider generating or removing this if not needed
      },
    };
    // console.log(payload, " coming d");
    // Make the POST request
    const response = await axiosInstance.post(endpoint, payload, {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
    // console.log("apiHelper Data response ====>", response.data);
    return response.data;
  } catch (error) {
    console.log("error -", error);
    console.error(
      "API call error:",
      error.response ? error.response.data : error.message
    );
    // throw error;
    return false;
  }
};

export default apiHelper;

// // Example usage
// const fetchData = async () => {
//   try {
//     const endpoint = '/your-endpoint';
//     const data = { categoryId: '123', id: '456' }; // Customize this based on your needs
//     const response = await apiHelper(endpoint, data);
//     console.log('API Response:', response);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// fetchData();

// const fetchDataWithConfig = async () => {
//   try {
//     const endpoint = '/your-endpoint';
//     const data = { categoryId: '123', id: '456' };
//     const config = {
//       headers: {
//         'Custom-Header': 'value',
//       },
//       timeout: 5000, // Example of adding a timeout
//     };
//     const response = await apiHelper(endpoint, data, config);
//     console.log('API Response with custom config:', response);
//   } catch (error) {
//     console.error('Error fetching data with config:', error);
//   }
// };

// fetchDataWithConfig();
