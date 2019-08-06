import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer, { reducers } from "./reducers";

const middleWares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleWares));

export type ActionTypes = ReturnType<typeof reducers[keyof typeof reducers]>;
export type AppState = ReturnType<typeof store.getState>;

export default store;
