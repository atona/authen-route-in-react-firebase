import { SIGN_IN, SIGN_OUT } from "../actions/ActionTypes";
import { AuthActions } from "../actions/ActionCreatorTypes";

type InitialState = {
  uid: string | null;
  displayName: string | null;
  email: string | null;
};

const initialState: InitialState = {
  uid: null,
  displayName: null,
  email: null
};

export default (state: InitialState = initialState, action: AuthActions) => {
  switch (action.type) {
    case SIGN_IN:
      return action.payload;
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};
