import api from "./api";

const getApplicationsByJobIdApi = async ({ jobId = "" }) => {
  try {
    const response = await api.get(
      `applications?jobId=${jobId}&_expand=freelancer`
    );
    return response.data;
  } catch (error) {
    console.error("getApplicationsByJobIdApi failed:", error);
    throw error;
  }
};

const getPostedByEmployerIdApi = async ({ employerId = "" }) => {
  try {
    const response = await api.get(`jobs?employerId=${employerId}`);
    return response.data;
  } catch (error) {
    console.error("getPostedByEmployerIdApi failed:", error);
    throw error;
  }
};

const postJobApi = async (payload) => {
  try {
    const response = await api.post("jobs", payload);
    return response.data;
  } catch (error) {
    console.error("postJobApi failed:", error);
    throw error;
  }
};

export { getApplicationsByJobIdApi, getPostedByEmployerIdApi, postJobApi };
