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
    // try {
    // setLoading(true);
    return await fireAuth.signOut();
    // } catch (e) {
    //   console.error(e.code, e.message);
    // }
  }, []);

  const signUp = useCallback(async (email, password) => {
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be whitelisted in the Firebase Console.
      url: `http://${process.env.REACT_APP_DOMAIN}/signout`,
      // This must be true.
      handleCodeInApp: true
    };
    // setLoading(true)
    return await fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        return response.user
          .sendEmailVerification(actionCodeSettings)
          .then(() => {
            window.localStorage.setItem("emailForSignIn", email);
          })
          .catch(e => {
            console.log(e);
          });
      });
    // .then(response => {
    //   return fireStore
    //     .collection("users")
    //     .doc(response.user.uid)
    //     .set({
    //       email,
    //       icon: null,
    //       last_login: null,
    //       name: email
    //     });
    // });
  }, []);

  const signUpEmail = useCallback(async (email, password) => {
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be whitelisted in the Firebase Console.
      url: "http://localhost:3000/finishSignUp?cartId=1234",
      // This must be true.
      handleCodeInApp: true
    };
    return await fireAuth
      .sendSignInLinkToEmail(email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    dispatch(
      setAuthApiAction({
        signUp,
        signUpEmail,
        signIn,
        signOut
      })
    );
    fireAuth.onAuthStateChanged(user => {
      // setLoading(false)
      dispatch(setUserAction(user));
    });
  }, [dispatch, signUp, signUpEmail, signIn, signOut]);

  return <>{children}</>;
};

export default AuthProvider;
