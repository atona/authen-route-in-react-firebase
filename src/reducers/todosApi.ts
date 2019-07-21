import { TodosApi } from "../Types";
import { SetTodosApiAction } from "../actions/ActionCreatorTypes";
import { SET_TODOS_API } from "../actions/ActionTypes";

type InitialState = TodosApi;

const initialState: InitialState = {
  add: null,
  update: null,
  remove: null
};

export default (
  state: InitialState = initialState,
  action: SetTodosApiAction
) => {
  switch (action.type) {
    case SET_TODOS_API:
      return action.payload;
    default:
      return state;
  }
};
