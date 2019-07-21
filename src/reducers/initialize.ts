import { INITIALIZE } from "../actions/ActionTypes";
import { InitializeAction } from "../actions/ActionCreatorTypes";

const initialState = false;

export default (state: Boolean = initialState, action: InitializeAction) => {
  switch (action.type) {
    case INITIALIZE:
      return action.payload;
    default:
      return state;
  }
};
