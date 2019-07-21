import { Todo } from "../Types";
import { SET_USER_TODOS, REMOVE_USER_TODOS } from "../actions/ActionTypes";
import { UserTodosAction } from "../actions/ActionCreatorTypes";

type InitialState = Todo[];
const initialState: InitialState = [];

export default (
  state: InitialState = initialState,
  action: UserTodosAction
) => {
  switch (action.type) {
    case SET_USER_TODOS:
      return action.payload;
    case REMOVE_USER_TODOS:
      return initialState;
    default:
      return state;
  }
};
