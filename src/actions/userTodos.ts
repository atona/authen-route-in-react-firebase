import { fireStore } from "../fireApi";
import { Dispatch } from "redux";
import { Todo } from "../Types";
import { SET_USER_TODOS, REMOVE_USER_TODOS } from "./ActionTypes";

export const setUserTodos = (datas: Todo[]) => ({
  type: SET_USER_TODOS,
  payload: datas
});
export const removeUserTodos = () => ({
  type: REMOVE_USER_TODOS
});
export const setUserTodosAction = (user: firebase.User) => {
  if (!user) {
    return (dispatch: Dispatch) => {
      dispatch(removeUserTodos());
    };
  }
  return async (dispatch: Dispatch) => {
    const querySnapshot: firebase.firestore.QuerySnapshot | void = await fireStore
      .doc(`users/${user.uid}`)
      .collection("todos")
      .get()
      .catch(error => {
        console.log("Error : ", error);
      });
    if (querySnapshot) {
      const datas = querySnapshot.docs.map(
        (doc: firebase.firestore.DocumentData) => {
          return doc.data();
        }
      );
      dispatch(setUserTodos(datas));
    }

    // fireStore
    //   .doc(`users/${user.uid}`)
    //   .collection("todos")
    //   .get()
    //   .then(querySnapshot => {
    //     const datas = querySnapshot.docs.map(doc => {
    //       return doc.data();
    //     });
    //     dispatch(setUserTodos(datas));
    //   })
    //   .catch(error => {
    //     console.log("Error : ", error);
    //   });
  };
};
