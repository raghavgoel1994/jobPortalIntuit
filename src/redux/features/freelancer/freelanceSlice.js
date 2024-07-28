import { createSlice } from "@reduxjs/toolkit";

const freelance = createSlice({
  name: "freelance",
  initialState: {
    isLoading: false,
    isError: false,
    repos: [],
    jobs: [],
    appliedJobs: [],
    profile: {},
  },
  reducers: {
    saveSkillsFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
    saveSkillsSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
    },
    saveSkills: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    getGithubReposFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.repos = [];
    },
    getGithubReposSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.repos = action.payload;
    },
    getGithubRepos: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    getJobsFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.jobs = [];
    },
    getJobsSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.jobs = action.payload;
    },
    getJobs: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    postApplicationFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.jobs = [];
    },
    postApplicationSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
    },
    postApplication: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    getJobsFromUserIdFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.appliedJobs = [];
    },
    getJobsFromUserIdSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.appliedJobs = action.payload;
    },
    getJobsFromUserId: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    getFreelancerFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.profile = {};
      state.repos = [];
    },
    getFreelancerSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.profile = action.payload;
    },
    getFreelancer: (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.profile = {};
      state.repos = [];
    },
  },
});

export const {
  saveSkillsFailure,
  saveSkillsSuccess,
  saveSkills,
  getGithubRepos,
  getGithubReposFailure,
  getGithubReposSuccess,
  getJobs,
  getJobsSuccess,
  getJobsFailure,
  postApplication,
  postApplicationSuccess,
  postApplicationFailure,
  getJobsFromUserId,
  getJobsFromUserIdSuccess,
  getJobsFromUserIdFailure,
  getFreelancer,
  getFreelancerSuccess,
  getFreelancerFailure,
} = freelance.actions;
export default freelance.reducer;
