import React, { useState } from "react";
import { userTodo } from "../context/TodoContext";

const todoItems = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  const [Mess, setMess] = useState(todo.todo);
  const { updateTodo, deleteTodo, ToggleComplete } = userTodo();

  const editTodo = () => {
    console.log(1111);

    updateTodo(todo.id, { ...todo, todo: Mess });
    setEdit(false);
  };

  const ToggleCompleted = () => {
    ToggleComplete(todo.id);
  };
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={ToggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          edit ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={Mess}
        onChange={(e) => setMess(e.target.value)}
        readOnly={!edit}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed == true) return;
          console.log(edit);

          if (edit) {
            editTodo();
          } else setEdit((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {edit ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => {
          console.log(todo.id);
          
          deleteTodo(todo.id);
        }}
      >
        ❌
      </button>
    </div>
  );
};

export default todoItems;
