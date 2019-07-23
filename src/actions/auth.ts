import { Auth } from "../Types";
import { SIGN_IN, SIGN_OUT } from "../actions/ActionTypes";

export const signInAction = ({ uid, displayName, email }: Auth) => {
  return {
    type: SIGN_IN,
    payload: {
      uid,
      displayName,
      email
    }
  };
};

export const signOutAction = () => {
  return {
    type: SIGN_OUT
  };
};
