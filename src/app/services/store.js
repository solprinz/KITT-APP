import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./auth";
import { adoptarApi } from "./adoptarService";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "../../features/auth/authSlice";
import adoptarReducer from "../../features/adoptar/adoptarSlice";

export const store = configureStore({
  reducer: {
    adoptar: adoptarReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [adoptarApi.reducerPath]: adoptarApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adoptarApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);
