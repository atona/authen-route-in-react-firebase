import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setUserAction } from "../actions/user";
import { setAuthApiAction } from "../actions/authApi";
import { fireAuth } from "../fireApi";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  const signIn = useCallback(async (email, password) => {
    try {
      // setLoading(true)
      return await fireAuth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.error(e.code, e.message);
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      // setLoading(true);
      await fireAuth.signOut();
    } catch (e) {
      console.error(e.code, e.message);
    }
  }, []);

  useEffect(() => {
    dispatch(
      setAuthApiAction({
        signIn,
        signOut
      })
    );
    fireAuth.onAuthStateChanged(user => {
      // setLoading(false)
      console.log(user);
      dispatch(setUserAction(user));
    });
  }, [dispatch, signIn, signOut]);

  return <>{children}</>;
};

export default AuthProvider;
