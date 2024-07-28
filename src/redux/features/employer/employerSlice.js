import { createSlice } from "@reduxjs/toolkit";

const employer = createSlice({
  name: "employer",
  initialState: {
    isLoading: false,
    isError: false,
    jobs: [],
    application: {},
  },
  reducers: {
    getPostedByEmployerIdFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
    getPostedByEmployerIdSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.jobs = action.payload;
    },
    getPostedByEmployerId: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    getApplicationsByJobIdFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
    getApplicationsByJobIdSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.application = { ...state.application, ...(action.payload || {}) };
    },
    getApplicationsByJobId: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    postJobFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
    postJobSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
    },
    postJob: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
  },
});

export const {
  getPostedByEmployerId,
  getPostedByEmployerIdSuccess,
  getPostedByEmployerIdFailure,
  getApplicationsByJobId,
  getApplicationsByJobIdSuccess,
  getApplicationsByJobIdFailure,
  postJob,
  postJobSuccess,
  postJobFailure,
} = employer.actions;
export default employer.reducer;
