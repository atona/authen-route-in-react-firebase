export const setTodosApiAction = todosApi => {
  return {
    type: "SET_TODOS_API",
    payload: {
      add: todosApi.add,
      update: todosApi.update,
      remove: todosApi.remove
    }
  };
};
