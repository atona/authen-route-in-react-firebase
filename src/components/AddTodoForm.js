import React, { useState, useCallback } from "react";
import styled from "styled-components";
import {
  TextField,
  Button,
  FormHelperText,
  FormControl
} from "@material-ui/core";

const Contents = styled.div`
  & {
    align-items: stretch;
    padding: 5px;
    display: flex;
  }
`;
const InputMessage = styled(FormHelperText)`
  && {
    margin: 5px;
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
  const [errors, setErrors] = useState({});
  const [settings] = useState({
    maxlength: 70
  });

  const onChangeInput = useCallback(
    e => {
      const { maxlength } = settings;
      if (e.target.value.length <= 0) {
        setErrors({ ...errors, input: "Empty." });
      } else if (e.target.value.length > maxlength) {
        setErrors({ ...errors, input: "Too Long." });
      } else {
        delete errors.input;
        setErrors(errors);
      }
      setInput(e.target.value);
    },
    [errors, setInput, setErrors, settings]
  );

  const addTodo = useCallback(() => {
    let currentErrors = errors;
    if (input.length <= 0) {
      currentErrors = { ...currentErrors, input: "Empty." };
    }
    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors);
      return;
    }
    todosApi.add(input);
    setInput("");
  }, [input, todosApi, errors]);

  return (
    <>
      <FormControl
        error={"input" in errors && errors.input.length > 0}
        aria-describedby="input-error"
      >
        <Contents>
          <Input
            id="add-todo"
            label="Todo Name"
            placeholder="Enter new todo"
            maxLength={settings.maxlength}
            value={input}
            onChange={onChangeInput}
            fullWidth
          />
          <AddButton color="primary" onClick={addTodo}>
            Add
          </AddButton>
        </Contents>
        <Contents>
          <InputMessage id="input-error">{errors.input}</InputMessage>
        </Contents>
      </FormControl>
    </>
  );
};
