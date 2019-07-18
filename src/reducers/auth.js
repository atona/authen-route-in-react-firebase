const initialState = {
  uid: null,
  displayName: null,
  email: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return action.payload;
    case "SIGN_OUT":
      return initialState;
    default:
      return state;
  }
};
