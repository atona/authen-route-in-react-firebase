import React from "react";
import AddTodoForm from "../containers/AddTodoForm";
import TodoList from "../containers/TodoList";
import TodosProvider from "../providers/TodosProvider";

const Todos = props => {
  return (
    <TodosProvider>
      <AddTodoForm />
      <TodoList />
    </TodosProvider>
  );
};

export default Todos;
