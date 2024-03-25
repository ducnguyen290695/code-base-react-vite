import axios from "./axios";
import { ACCESS_TOKEN_KEY } from "src/constants/auth";
import { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
import { API_URL } from "src/enums/apiPath";

interface ApiRequestI extends AxiosRequestConfig {
  url: string;
}

export const getHeaders = () => {
  const token = Cookies.get(ACCESS_TOKEN_KEY);
  const defaultHeader = {
    Accept: "application/json",
    "content-type": "application/json",
  };

  if (token) {
    return {
      ...defaultHeader,
      Authorization: `Bearer ${token}`,
    };
  }

  return defaultHeader;
};

const getApi = ({ url, ...options }: ApiRequestI) => {
  return axios({
    method: "GET",
    url,
    baseURL: API_URL,
    headers: { ...getHeaders() },
    ...options,
  });
};

const postApi = ({ url, data, ...options }: ApiRequestI) => {
  return axios({
    method: "POST",
    url: url,
    baseURL: API_URL,
    data,
    headers: { ...getHeaders() },
    ...options,
  });
};

const postApiUpload = ({ url, data, ...options }: ApiRequestI) => {
  return axios({
    method: "POST",
    url: url,
    baseURL: API_URL,
    data,
    headers: { ...getHeaders(), "content-type": "multipart/form-data" },
    ...options,
  });
};

const putApi = ({ url, data, ...options }: ApiRequestI) => {
  return axios({
    method: "PUT",
    url: url,
    baseURL: API_URL,
    data,
    headers: { ...getHeaders() },
    ...options,
  });
};

const patchApi = ({ url, data, ...options }: ApiRequestI) => {
  return axios({
    method: "PATCH",
    url: url,
    baseURL: API_URL,
    data,
    headers: { ...getHeaders() },
    ...options,
  });
};

const deleteApi = ({ url, ...options }: ApiRequestI) => {
  return axios({
    method: "DELETE",
    url: url,
    baseURL: API_URL,
    headers: { ...getHeaders() },
    ...options,
  });
};

export const apiRequest = {
  get: getApi,
  post: postApi,
  postUpload: postApiUpload,
  put: putApi,
  delete: deleteApi,
  patch: patchApi,
};
