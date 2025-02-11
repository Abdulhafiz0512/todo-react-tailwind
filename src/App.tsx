import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoProvider from "./store/context";
import React from "react";


const TodoApp = () => {
  return (
    <TodoProvider>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default TodoApp;
