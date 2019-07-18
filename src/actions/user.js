import { fireStore } from "../fireApi";
import { initializeAction } from "./initialize";

const receiveData = data => ({
  type: "SET_USER",
  payload: {
    uid: data.uid,
    email: data.email,
    icon: data.icon,
    last_login: data.last_login,
    name: data.name
  }
});
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
    fireStore
      .collection("/users")
      .doc(user.uid)
      .get()
      .then(doc => {
        if (doc.exists) {
          // do something
          // doc.data() でデータを取得
          dispatch(receiveData({ uid: user.uid, ...doc.data() }));
          dispatch(initializeAction());
        } else {
          console.log("No user");
        }
      })
      .catch(error => {
        console.log("Error : ", error);
      });
  };
};
