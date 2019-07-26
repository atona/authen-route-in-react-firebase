import { TodosApi } from "../Types";
import { SET_TODOS_API } from "./ActionTypes";

export const setTodosApiAction = (todosApi: TodosApi) => {
  return {
    type: SET_TODOS_API,
    payload: todosApi
  };
};
