import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import employerReducer from "./features/employer/employerSlice";
import freelanceReducer from "./features/freelancer/freelanceSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  freelance: freelanceReducer,
  employer: employerReducer,
});

export default rootReducer;
