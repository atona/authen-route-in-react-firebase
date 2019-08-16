import React, { useMemo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserTodos } from "../actions/userTodos";
import { setTodosApiAction } from "../actions/todosApi";
import { fireStore } from "../fireApi";

const TodosProvider = ({ children }) => {
  const dispatch = useDispatch();
  const uid = useSelector(state => state.user.uid);
  const userTodos = useSelector(state => state.userTodos);

  const collection = useMemo(() => {
    const col = fireStore.doc(`users/${uid}`).collection("todos");

    col.orderBy("createdAt", "desc").onSnapshot(query => {
      const datas = [];
      query.forEach(d => datas.push({ ...d.data(), docId: d.id }));
      dispatch(setUserTodos(datas));
    });

    return col;
  }, [uid, dispatch]);

  const add = useCallback(
    async text => {
      try {
        await collection.add({
          text,
          isComplete: false,
          createdAt: new Date()
        });
      } catch (e) {
        console.log(e);
      }
    },
    [collection]
  );

  const update = useCallback(
    async ({ docId, text, isComplete }) => {
      const updateTo = {
        ...userTodos.find(t => t.docId === docId),
        text,
        isComplete
      };
      if (isComplete) {
        updateTo.completedAt = new Date();
      }
      try {
        await collection.doc(docId).set(updateTo);
      } catch (e) {
        console.log(e);
      }
    },
    [userTodos, collection]
  );

  const remove = useCallback(
    async ({ docId }) => {
      try {
        await collection.doc(docId).delete();
      } catch (e) {
        console.log(e);
      }
    },
    [collection]
  );

  useEffect(() => {
    dispatch(
      setTodosApiAction({
        add,
        update,
        remove
      })
    );
  }, [dispatch, add, update, remove]);

  return <>{children}</>;
};

export default TodosProvider;
