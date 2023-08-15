import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4444",
});

instance.interceptors.request.use((config) => {
  //TODO token will not stored in localstorage
  // config.headers.Authorization = window.localStorage.getItem("token");
  config.withCredentials = true;
  console.log("Request Config:", config);
  return config;
});

instance.interceptors.response.use((config) => {
  config.withCredentials = true;
  return config;
});

export default instance;
