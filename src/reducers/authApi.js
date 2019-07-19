const initialState = {
  signUp: () => {},
  signUpEmail: () => {},
  signIn: () => {},
  signOut: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTH_API":
      return action.payload;
    default:
      return state;
  }
};
