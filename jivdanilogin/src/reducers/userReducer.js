// src/reducers/userReducer.js
const initialState = {
  name: "",
  email: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.payload };
    case "CLEAR_USER":
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
