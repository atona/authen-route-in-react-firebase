const initialState = {
  add: () => {},
  update: () => {},
  remove: () => {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_TODOS_API":
      return action.payload;
    default:
      return state;
  }
};
