import { User } from "../Types";
import { SET_USER, REMOVE_USER } from "../actions/ActionTypes";
import { UserActions } from "../actions/ActionCreatorTypes";

type InitialState = User;

const initialState: InitialState = {
  uid: null,
  emailVerified: null,
  email: null,
  icon: null,
  last_login: null,
  name: null
};

export default (state: InitialState = initialState, action: UserActions) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case REMOVE_USER:
      return initialState;
    default:
      return state;
  }
};
