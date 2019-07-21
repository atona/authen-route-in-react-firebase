export const setAuthApiAction = authApi => {
  return {
    type: "SET_AUTH_API",
    payload: {
      signUp: authApi.signUp,
      signIn: authApi.signIn,
      signOut: authApi.signOut
    }
  };
};
