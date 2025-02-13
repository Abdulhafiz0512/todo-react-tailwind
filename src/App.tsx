import AddTodo from "./components/AddTodo";
import Clock from "./components/Clock";
import Quote from "./components/Quote";
import Schedule from "./components/Schedule";
import TodoList from "./components/TodoList";
import TodoProvider from "./store/context";
import React from "react";

const TodoApp = () => {
  return (
    <TodoProvider>
      <div className="flex justify-around ">
        <div className="w-[400px] max-h-fit mt-10 p-6 bg-white rounded-lg shadow-xl">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold mb-4">Todo App</h1>
            <Clock></Clock>
          </div>

          <AddTodo />
          <TodoList />
        </div>
        <div className=" flex justify-center items-center min-h-screen flex-col">
          <Quote text={"To be or not to be, that is the question."} author={"Teacher"}></Quote>
          <Schedule></Schedule>
        </div>
      </div>
    </TodoProvider>
  );
};

export default TodoApp;
