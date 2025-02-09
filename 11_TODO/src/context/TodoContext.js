import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: " TODO MESSAGE",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  ToggleComplete: (id) => {},
});

export const userTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
