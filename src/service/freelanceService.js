import api, { apiGithub } from "./api";

const patchFreelancerApi = async ({ id, ...requestData }) => {
  try {
    const response = await api.patch(`/freelancers/${id}`, requestData);
    return response.data;
  } catch (error) {
    console.error("patchFreelancerApi failed:", error);
    throw error;
  }
};

const getFreelancerApi = async ({ id }) => {
  try {
    const response = await api.get(`/freelancers/${id}`);
    return response.data;
  } catch (error) {
    console.error("patchFreelancerApi failed:", error);
    throw error;
  }
};

const getGitHubReposApi = async ({ github }) => {
  try {
    const response = await apiGithub.get(`users/${github}/repos`);
    return response.data;
  } catch (error) {
    console.error("getGitHubReposApi failed:", error);
    throw error;
  }
};

const getJobsApi = async ({ filter = "", page }) => {
  try {
    const response = await api.get(
      `jobs?${filter}${page ? `&_page=${page}` : ""}`
    );
    return response.data;
  } catch (error) {
    console.error("getJobsApi failed:", error);
    throw error;
  }
};

const getAppliedJobFromUserIdApi = async ({ freelancerId }) => {
  try {
    const response = await api.get(`applications?freelancerId=${freelancerId}`);
    return response.data;
  } catch (error) {
    console.error("getAppliedJobFromUserIdApi failed:", error);
    throw error;
  }
};

const postApplicationApi = async (payload) => {
  try {
    const response = await api.post(`applications`, payload);
    return response.data;
  } catch (error) {
    console.error("postApplicationApi failed:", error);
    throw error;
  }
};

export {
  getAppliedJobFromUserIdApi,
  getFreelancerApi,
  getGitHubReposApi,
  getJobsApi,
  patchFreelancerApi,
  postApplicationApi,
};
