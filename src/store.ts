import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer, { reducers } from "./reducers";

const middleWares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleWares));

type SecondArg<T> = T extends (
  first: any,
  second: infer A,
  ...arg: any[]
) => any
  ? A extends never
    ? never
    : A
  : never;
export type AllAction = SecondArg<
  ReturnType<typeof reducers[keyof typeof reducers]>
>;
export type AppState = ReturnType<typeof store.getState>;

export default store;
