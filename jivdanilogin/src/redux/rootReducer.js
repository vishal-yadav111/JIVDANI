// src/redux/rootReducer.js

import { REACT_NATIVE_DATA_SHOW } from "./actions";

const initialState = {
  dataShowValue: 0,
  user: {
    user: "Demo User",
    // Simulate your role constant usage.
    // For this demo, we'll use a simple string.
    role: "ADMIN", // You can change this to 'DOCTOR' to test the DoctorItems logic
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REACT_NATIVE_DATA_SHOW:
      console.log(`Redux: React Native Data Show set to ${action.payload}`);
      return {
        ...state,
        dataShowValue: action.payload,
      };
    case "SET_USER_ROLE":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
