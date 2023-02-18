import axios from "axios";
import router from "@/router";
// axios.defaults.baseURL = "http://localhost/Mandobk-BE/public/v1/";

// set header

// axios.defaults.headers = {Accept: "application/vnd.api+json", withCredentials: true ,"Content-Type": "application/vnd.api+json"};

// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
const domain = "http://127.0.0.1:8000/api/";
const http = axios.create({
    baseURL: domain,
    
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
})


http.interceptors.response.use(
  res => {
    if (
      res.data.message === "token invalid" ||
      res.data.message === "Authorization Token not found" ||
      res.data.message === "Token is Expired"
    ) {
      localStorage.removeItem("token");
      localStorage.setItem("loggedIn", "false");
      router.push("/login")|| router.go(0) ;
    } else {
      // Important: response interceptors **must** return the response.
      return res;
    }
    return res;
  },
  error => {
    // Do something with response error
    if (error.response.status === 500) router.replace("/server_error");

    return Promise.reject(error.response);
  }
);

http.interceptors.request.use(
    config => {
    if (!config.headers.Authorization) {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    }

    return config;
  },
  error => Promise.reject(error)
);

export default http;
