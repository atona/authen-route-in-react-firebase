import { Dispatch } from "redux";
import { fireStore } from "../fireApi";
import { initializeAction } from "./initialize";

import { User } from "../Types";
import { SET_USER, REMOVE_USER } from "../actions/ActionTypes";
import { SetUserAction, RemoveUserAction } from "./ActionCreatorTypes";

const receiveData = (data: User): SetUserAction => {
  return {
    type: SET_USER,
    payload: data
  };
};
const removeData = (): RemoveUserAction => ({
  type: REMOVE_USER
});
export const setUserAction = (user: firebase.User) => {
  if (!user) {
    return (dispatch: Dispatch) => {
      dispatch(removeData());
      dispatch(initializeAction());
    };
  }
  return async (dispatch: Dispatch) => {
    const { uid, email, emailVerified } = user;
    const doc: firebase.firestore.DocumentData = await fireStore
      .collection("/users")
      .doc(uid)
      .get();
    if (doc.exists) {
      // do something
      // doc.data() でデータを取得
      dispatch(
        receiveData({
          uid,
          emailVerified,
          ...doc.data()
        })
      );
      dispatch(initializeAction());
    } else {
      await fireStore
        .collection("/users")
        .doc(uid)
        .set({
          email,
          icon: null,
          last_login: null,
          name: email
        })
        .catch(error => {
          console.log("Error : ", error);
        });
      dispatch(
        receiveData({
          uid,
          emailVerified,
          ...doc.data()
        })
      );
      dispatch(initializeAction());
    }
  };
};
