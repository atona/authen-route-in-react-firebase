import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setUserAction } from "../actions/user";
import { setAuthApiAction } from "../actions/authApi";
import { fireAuth } from "../fireApi";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  const signIn = useCallback(async (email, password) => {
    // setLoading(true)
    return await fireAuth.signInWithEmailAndPassword(email, password);
  }, []);

  const signOut = useCallback(async () => {
    // setLoading(true);
    return await fireAuth.signOut();
  }, []);

  const sendEmailVerification = useCallback(async user => {
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be whitelisted in the Firebase Console.
      url: `http://${process.env.REACT_APP_DOMAIN}/signout`,
      // This must be true.
      handleCodeInApp: true
    };
    return await user.sendEmailVerification(actionCodeSettings);
  }, []);

  const signUp = useCallback(
    async (email, password) => {
      // setLoading(true)
      return await fireAuth
        .createUserWithEmailAndPassword(email, password)
        .then(response => {
          sendEmailVerification(response.user);
        });
    },
    [sendEmailVerification]
  );

  useEffect(() => {
    dispatch(
      setAuthApiAction({
        signUp,
        signIn,
        signOut,
        sendEmailVerification
      })
    );
    fireAuth.onAuthStateChanged(user => {
      // setLoading(false)
      dispatch(setUserAction(user));
    });
  }, [dispatch, signUp, signIn, signOut, sendEmailVerification]);

  return <>{children}</>;
};

export default AuthProvider;
