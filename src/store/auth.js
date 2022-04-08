import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      console.log(action);
      if (
        action.payload.user.email.trim() === "munir@gmail.com" &&
        action.payload.user.password.trim() === "12345"
      ) {
        state.isAthenticated = true;
      }
    },
    logout(state) {
      state.isAthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
