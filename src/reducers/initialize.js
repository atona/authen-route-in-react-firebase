const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case "INITIALIZE":
      return action.payload;
    default:
      return state;
  }
};
