import api from "./api";

const login = async ({ email, password, role = "employer" }) => {
  try {
    const response = await api.get(
      `${
        role === "freelancer" ? "/freelancers" : "/employers"
      }?email=${email}&password=${password}`
    );
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export { login };
