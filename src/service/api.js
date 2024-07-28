import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    "Content-Type": "application/json",
  },
});

const apiGithub = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export { api, apiGithub };

export default api;
