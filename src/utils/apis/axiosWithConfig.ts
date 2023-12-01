import axios from "axios";

const axiosWithConfig = axios.create();

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  return axiosConfig;
});

export default axiosWithConfig;
