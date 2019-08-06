import { combineReducers } from "redux";
import auth from "./auth";
import initialize from "./initialize";
import user from "./user";
import userTodos from "./userTodos";
import todosApi from "./todosApi";
import authApi from "./authApi";

export const reducers = {
  auth,
  initialize,
  user,
  userTodos,
  todosApi,
  authApi
};

export default combineReducers(reducers);
