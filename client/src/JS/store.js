import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import serviceSlice from "./serviceSlice.js/serviceSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    service:serviceSlice,
  },
});
