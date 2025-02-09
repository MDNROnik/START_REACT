import { createContext, useContext } from "react";

export const TodoContext = createContext({
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  ToggleComplete: (id) => {},
});

export const userTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
