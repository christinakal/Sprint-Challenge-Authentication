import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  return axios.create({
    baseURL: "http://localhost:3300/api/jokes",
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;
