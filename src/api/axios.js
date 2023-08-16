import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:4444",
});

instance.interceptors.request.use((config) => {
  //TODO token will not stored in localstorage
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});

instance.interceptors.response.use((config) => {
  return config;
});

export default instance;
