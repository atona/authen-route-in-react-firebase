import React from "react";
import { useSelector } from "react-redux";
import AddTodoForm from "../components/AddTodoForm";

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

  return <AddTodoForm {..._props} />;
};
