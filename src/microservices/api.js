import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/",
  timeout: 0,
  headers: {},
});

export default api;
