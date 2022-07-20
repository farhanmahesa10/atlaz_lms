import axios from "axios";
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

const GET = (url, req, config) =>
  API.get(url, req, config).then((res) => res.data);

const POST = (url, data, config) =>
  API.post(url, data, config).then((res) => res.data);

const PUT = (url, data, config) =>
  API.put(url, data, config).then((res) => res.data);

const PATCH = (url, data, config) =>
  API.patch(url, data, config).then((res) => res.data);

const DESTROY = (url, data, config) =>
  API.delete(url, data, config).then((res) => res.data);

export { GET, POST, PUT, PATCH, DESTROY, defConfig, BaseAPIURL };
