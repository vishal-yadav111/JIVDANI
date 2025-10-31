// src/redux/actions.js

// Define Action Type
export const REACT_NATIVE_DATA_SHOW = "REACT_NATIVE_DATA_SHOW";

// Action Creator
export const Reactnativedatahshow = (payload) => ({
  type: REACT_NATIVE_DATA_SHOW,
  payload: payload,
});

// A placeholder for the user state for the sidebar role logic
export const setUserRole = (role) => ({
  type: "SET_USER_ROLE",
  payload: { role },
});
