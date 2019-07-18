const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_TODOS":
      return action.payload;
    case "REMOVE_USER_TODOS":
      return initialState;
    default:
      return state;
  }
};
