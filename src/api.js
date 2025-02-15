import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost/sqi-attendance-app/backend", // Your base URL
});

export default Api;
