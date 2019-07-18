import React from "react";
import { useSelector } from "react-redux";
import TodoList from "../components/TodoList";

export default props => {
  const user = useSelector(state => state.user);
  const userTodos = useSelector(state => state.userTodos);
  const todosApi = useSelector(state => state.todosApi);

  const _props = {
    user,
    userTodos,
    todosApi,
    ...props
  };

  return <TodoList {..._props} />;
};
