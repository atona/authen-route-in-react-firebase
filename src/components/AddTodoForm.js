import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";

const Contents = styled.div`
  & {
    align-items: stretch;
    padding: 5px;
    display: flex;
  }
`;

const Input = styled(TextField)`
  && {
    margin: 5px;
  }
`;
const AddButton = styled(Button)`
  && {
    margin: 5px;
  }
`;

// const SignoutButton = styled(Button)`
//   && {
//     margin: 5px 5px 5px 20px;
//   }
// `;

export default ({ todosApi }) => {
  const [input, setInput] = useState("");

  const addTodo = useCallback(() => {
    todosApi.add(input);
    setInput("");
  }, [input, todosApi]);

  return (
    <Contents>
      <Input
        id="add-todo"
        label="Todo Name"
        placeholder="Enter new todo"
        value={input}
        onChange={e => setInput(e.target.value)}
        fullWidth
      />
      <AddButton color="primary" onClick={addTodo}>
        Add
      </AddButton>
    </Contents>
  );
};
