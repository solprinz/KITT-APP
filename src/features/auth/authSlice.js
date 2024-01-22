import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    email: null,
    idToken: null,
    localId: null,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value.email = action.payload.email;
      state.value.idToken = action.payload.idToken;
      state.value.localId = action.payload.localId;
      console.log(action.payload);
    },
    clearUser: (state) => {
      state.value.email = null;
      state.value.idToken = null;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
