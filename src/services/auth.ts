import { ACCESS_TOKEN_KEY } from "src/constants/auth";
import { ApiPath } from "src/enums/apiPath";
import { RoutePath } from "src/enums/routePath";
import { LoginReqI } from "src/models/auth";
import { apiRequest } from "src/utils/api";
import Cookies from "js-cookie";

export const login = async (data: LoginReqI) => {
  return await apiRequest.post({
    url: ApiPath.LOGIN,
    data,
  });
};

export const logout = async () => {
  Cookies.remove(ACCESS_TOKEN_KEY);
  window.location.href = RoutePath.LOGIN;
};

export const getMe = async () => {
  return await apiRequest.get({
    url: ApiPath.ME,
  });
};
