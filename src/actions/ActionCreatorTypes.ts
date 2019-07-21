import { Auth, Todo, User, AuthApi, TodosApi } from "../Types";
import {
  SIGN_IN,
  SIGN_OUT,
  INITIALIZE,
  SET_AUTH_API,
  SET_USER,
  REMOVE_USER,
  SET_USER_TODOS,
  REMOVE_USER_TODOS,
  SET_TODOS_API
} from "./ActionTypes";

export type SignInAction = {
  type: typeof SIGN_IN;
  payload: Auth;
};

export type SignOutAction = {
  type: typeof SIGN_OUT;
};

export type AuthActions = SignInAction | SignOutAction;

export type InitializeAction = {
  type: typeof INITIALIZE;
  payload: Boolean;
};

export type SetUserAction = {
  type: typeof SET_USER;
  payload: User;
};

export type RemoveUserAction = {
  type: typeof REMOVE_USER;
};

export type UserActions = SetUserAction | RemoveUserAction;

export type SetUserTodosAction = {
  type: typeof SET_USER_TODOS;
  payload: Todo[];
};

export type RemoveUserTodosAction = {
  type: typeof REMOVE_USER_TODOS;
};

export type UserTodosAction = SetUserTodosAction | RemoveUserTodosAction;

export type SetAuthApiAction = {
  type: typeof SET_AUTH_API;
  payload: AuthApi;
};

export type SetTodosApiAction = {
  type: typeof SET_TODOS_API;
  payload: TodosApi;
};
