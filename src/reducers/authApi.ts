import { AuthApi } from "../Types";
import { SetAuthApiAction } from "../actions/ActionCreatorTypes";
import { SET_AUTH_API } from "../actions/ActionTypes";

type initialState = AuthApi;

const initialState = {
  signUp: null,
  signIn: null,
  signOut: null,
  sendEmailVerification: null
};

export default (
  state: initialState = initialState,
  action: SetAuthApiAction
) => {
  switch (action.type) {
    case SET_AUTH_API:
      return action.payload;
    default:
      return state;
  }
};
