import { fireStore } from "../fireApi";
import { initializeAction } from "./initialize";

const receiveData = data => {
  return {
    type: "SET_USER",
    payload: {
      uid: data.uid,
      email: data.email,
      emailVerified: data.emailVerified,
      icon: data.icon,
      last_login: data.last_login,
      name: data.name
    }
  };
};
const removeData = () => ({
  type: "REMOVE_USER"
});
export const setUserAction = user => {
  if (!user) {
    return dispatch => {
      dispatch(removeData());
      dispatch(initializeAction());
    };
  }
  return dispatch => {
    const userDoc = fireStore.collection("/users").doc(user.uid);
    userDoc
      .get()
      .then(doc => {
        if (doc.exists) {
          // do something
          // doc.data() でデータを取得
          dispatch(
            receiveData({
              uid: user.uid,
              emailVerified: user.emailVerified,
              ...doc.data()
            })
          );
          dispatch(initializeAction());
        } else {
          userDoc
            .set({
              email: user.email,
              icon: null,
              last_login: null,
              name: user.email
            })
            .then(() => {
              dispatch(
                receiveData({
                  uid: user.uid,
                  emailVerified: user.emailVerified,
                  ...doc.data()
                })
              );
              dispatch(initializeAction());
            });
        }
      })
      .catch(error => {
        console.log("Error : ", error);
      });
  };
};
