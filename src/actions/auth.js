export const signInAction = user => {
  return {
    type: "SIGN_IN",
    payload: {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email
    }
  };
};

export const signOutAction = () => {
  return {
    type: "SIGN_OUT"
  };
};
