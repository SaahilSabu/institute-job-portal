import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "username",
  initialState: {
    value: null,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = null;
      localStorage.removeItem("id");
      localStorage.removeItem("authToken");
      localStorage.removeItem("adminToken");
    },
  },
});
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
