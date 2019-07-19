import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setUserAction } from "../actions/user";
import { setAuthApiAction } from "../actions/authApi";
import { fireAuth, fireStore } from "../fireApi";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  const signIn = useCallback(async (email, password) => {
    // setLoading(true)
    return await fireAuth.signInWithEmailAndPassword(email, password);
  }, []);

  const signOut = useCallback(async () => {
    // try {
    // setLoading(true);
    await fireAuth.signOut();
    // } catch (e) {
    //   console.error(e.code, e.message);
    // }
  }, []);

  const signUp = useCallback(async (email, password) => {
    // setLoading(true)
    return await fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        return fireStore
          .collection("users")
          .doc(response.user.uid)
          .set({
            email,
            icon: null,
            last_login: null,
            name: email
          });
      });
  }, []);

  useEffect(() => {
    dispatch(
      setAuthApiAction({
        signUp,
        signIn,
        signOut
      })
    );
    fireAuth.onAuthStateChanged(user => {
      // setLoading(false)
      console.log(user);
      dispatch(setUserAction(user));
    });
  }, [dispatch, signUp, signIn, signOut]);

  return <>{children}</>;
};

export default AuthProvider;
