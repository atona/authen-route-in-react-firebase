import { INITIALIZE } from "./ActionTypes";

export const initializeAction = () => {
  return {
    type: INITIALIZE,
    payload: true
  };
};
