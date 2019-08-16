import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  Divider
} from "@material-ui/core";
import DeleteForever from "@material-ui/icons/DeleteForever";
import styled from "styled-components";
import { format } from "date-fns";

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

const TodoText = styled(ListItemText)({
  opacity: ({ completed }) => (toBoolean(completed) ? "0.9" : "1.0"),
  textDecoration: ({ completed }) =>
    toBoolean(completed) ? "line-through" : "none"
});

const TodoInfo = styled.div({
  margin: "0 5px"
});

const toBoolean = booleanStr => {
  return booleanStr.toLowerCase() === "true";
};

const formatDate = nanoseconds => {
  return format(nanoseconds, "YYYY.MM.DD");
};

// const sortToDescByDate = (a, b) => {
//   return b.createdAt.toDate() - a.createdAt.toDate();
// };

const useStyles = makeStyles(theme => ({
  root: {},
  todoListItem: {
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1, 0)
    }
  },
  todoInfo: {
    margin: theme.spacing(0, 1),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0)
    }
  },
  text: {
    "& span": {
      [theme.breakpoints.down("sm")]: {
        fontSize: ".75rem"
      }
    }
  },
  date: {
    "& p": {
      [theme.breakpoints.down("sm")]: {
        fontSize: ".5rem"
      }
    }
  }
}));

const TodoList = () => {
  const { update, remove } = useSelector(state => state.todosApi);
  const userTodos = useSelector(state => state.userTodos);

  const classes = useStyles();

  return (
    <Contents>
      {userTodos.length === 0 ? (
        <EmptyMessage>No todos...</EmptyMessage>
      ) : (
        <List>
          {userTodos
            // .sort(sortToDescByDate)
            .map(todo => (
              <Fragment key={`${todo.docId}--fragment`}>
                <ListItem
                  key={`${todo.docId}--list`}
                  className={classes.todoListItem}
                >
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
                  <TodoText
                    primary={todo.text}
                    completed={todo.isComplete.toString()}
                    className={classes.text}
                  />
                  <TodoInfo className={classes.todoInfo}>
                    <ListItemText
                      secondary={formatDate(todo.createdAt.toDate())}
                      className={classes.date}
                    />
                  </TodoInfo>
                  {/* <Button
                  color="default"
                  onClick={() => {
                    remove({ docId: todo.docId });
                  }}
                >
                  <DeleteForever color="secondary" fontSize="large" />
                </Button> */}
                  <IconButton
                    color="default"
                    onClick={() => {
                      remove({ docId: todo.docId });
                    }}
                    className={classes.button}
                    aria-label="delete"
                  >
                    <DeleteForever fontSize="large" />
                  </IconButton>
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
