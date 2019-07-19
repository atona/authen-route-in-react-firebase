const initialState = {
  uid: null,
  emailVerified: false,
  email: null,
  icon: null,
  last_login: null,
  name: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    case "REMOVE_USER":
      return initialState;
    default:
      return state;
  }
};
