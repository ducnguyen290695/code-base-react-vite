import axios from "axios";
const instance = axios.create({});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject(error.response);
  },
);

export default instance;
