import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Checkbox,
  Divider
} from "@material-ui/core";
import styled from "styled-components";

const Contents = styled.div`
  & {
    flex: 1;
    border-top: 1px solid #ddd;
    margin-top: 10px;
    padding: 10px;
  }
`;

const EmptyMessage = styled.div`
  & {
    font-size: 18px;
    color: #aaa;
    padding: 10px;
  }
`;

const Text = styled(ListItemText)`
  && {
    opacity: ${({ completed }) => (toBoolean(completed) ? "0.9" : "1.0")};
    text-decoration: ${({ completed }) =>
      toBoolean(completed) ? "line-through" : "none"};
  }
`;

const toBoolean = booleanStr => {
  return booleanStr.toLowerCase() === "true";
};

const TodoList = () => {
  const { update, remove } = useSelector(state => state.todosApi);
  const userTodos = useSelector(state => state.userTodos);
  return (
    <Contents>
      {userTodos.length === 0 ? (
        <EmptyMessage>No todos...</EmptyMessage>
      ) : (
        <List>
          {userTodos.map(todo => (
            <Fragment key={`${todo.docId}--fragment`}>
              <ListItem key={`${todo.docId}--list`}>
                <Checkbox
                  checked={todo.isComplete}
                  onClick={() => {
                    update({
                      docId: todo.docId,
                      text: todo.text,
                      isComplete: !todo.isComplete
                    });
                  }}
                />
                <Text
                  primary={todo.text}
                  completed={todo.isComplete.toString()}
                />
                <ListItemSecondaryAction>
                  <Button
                    color="default"
                    onClick={() => {
                      remove({ docId: todo.docId });
                    }}
                  >
                    Delete
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider key={`${todo.docId}--divider`} />
            </Fragment>
          ))}
        </List>
      )}
    </Contents>
  );
};

export default TodoList;
