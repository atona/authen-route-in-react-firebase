export const setAuthApiAction = authApi => {
  return {
    type: "SET_AUTH_API",
    payload: {
      signIn: authApi.signIn,
      signOut: authApi.signOut
    }
  };
};
