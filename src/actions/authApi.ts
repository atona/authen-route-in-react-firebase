import { AuthApi } from "../Types";
import { SET_AUTH_API } from "./ActionTypes";

export const setAuthApiAction = (authApi: AuthApi) => {
  return {
    type: SET_AUTH_API,
    payload: authApi
  };
};
