import { fireStore } from "../fireApi";

export const setUserTodos = datas => ({
  type: "SET_USER_TODOS",
  payload: datas
});
export const removeUserTodos = () => ({
  type: "REMOVE_USER_TODOS"
});
export const setUserTodosAction = user => {
  if (!user) {
    return dispatch => {
      dispatch(removeUserTodos());
    };
  }
  return dispatch => {
    fireStore
      .doc(`users/${user.uid}`)
      .collection("todos")
      .get()
      .then(querySnapshot => {
        const datas = querySnapshot.docs.map(doc => {
          return doc.data();
        });
        dispatch(setUserTodos(datas));
      })
      .catch(error => {
        console.log("Error : ", error);
      });
  };
};
