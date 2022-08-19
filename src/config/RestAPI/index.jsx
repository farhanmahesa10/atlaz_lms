import axios from "axios";
import { useNavigate } from "react-router-dom";
const BaseAPIURL = process.env.REACT_APP_BASE_API_URL;
const BaseURL = process.env.REACT_APP_BASE_URL;

const API = axios.create({
  baseURL: BaseAPIURL,
});

const defConfig = (params) => {
  const tokenAccess = localStorage.getItem(BaseURL + "/accessToken");
  const config = {
    headers: { token: "Bearer " + tokenAccess },
    params: params && {
      column: params,
      filter: params,
    },
  };
  return config;
};

function getLocalAccessToken() {
  const accessToken = localStorage.getItem(BaseURL + "/accessToken")
  return accessToken;
}

API.interceptors.request.use(
  (config) => {
    const token = getLocalAccessToken();
    if (token) {
      config.headers.token = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  response => {
    return response
  },
  function (error) {
    const originalRequest = error.config
    if (error.response.status === 401) {
      return axios
        .get('/users/token', originalRequest)
        .then(res => {
          localStorage.setItem(
            process.env.REACT_APP_BASE_URL + "/accessToken",
            res.data.accessToken.token
          );
          originalRequest.headers.token = "Bearer " + res.data.accessToken.token
          return axios(originalRequest)
        })
    }
    return Promise.reject(error)
  }
)

const GET = (url, req, config) =>
  API.get(url, req, config).then((res) => res.data)

const POST = (url, data, config) =>
  API.post(url, data, config).then((res) => res.data);

const PUT = (url, data, config) =>
  API.put(url, data, config).then((res) => res.data);

const PATCH = (url, data, config) =>
  API.patch(url, data, config).then((res) => res.data);

const DESTROY = (url, data, config) =>
  API.delete(url, data, config).then((res) => res.data);

export { GET, POST, PUT, PATCH, DESTROY, defConfig, BaseAPIURL };
