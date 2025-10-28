import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  role: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action) {
      state.user = action.payload.user;
      state.role = action.payload.role;
    },
    clearUserData(state) {
      state.user = null;
      state.role = null;
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;