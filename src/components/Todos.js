import React from "react";
import styled from "styled-components";
import AddTodoForm from "../containers/AddTodoForm";
import TodoList from "../containers/TodoList";
import TodosProvider from "../providers/TodosProvider";

const Contents = styled.div`
  & {
    width: 80%;
    height: 90%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    margin: 10% auto 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
`;

const Todos = props => {
  return (
    <TodosProvider>
      <Contents>
        <AddTodoForm />
        <TodoList />
      </Contents>
    </TodosProvider>
  );
};

export default Todos;
