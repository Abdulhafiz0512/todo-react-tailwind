import React from "react";
import { useState } from "react";
import {
  DELETE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  useTodo,
} from "../store/context";
import Button from "./Button";
import Input from "./Input";
import { Edit, Trash2, Check, X } from "lucide-react";


type Todo = {
  id: string;
  text: string;
  completed: boolean;
};


type TodoItemProps = {
  todo: Todo;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { dispatch } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  
  const handleUpdate = () => {
    dispatch({ type: UPDATE_TODO, payload: { id: todo.id, text: editedText } });
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between p-2 border rounded mb-2">
      {isEditing ? (
        <Input
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="flex-grow mr-2"
        />
      ) : (
        <span className={`flex-grow ${todo.completed ? "line-through" : ""}`}>
          {todo.text}
        </span>
      )}
      <div className="flex space-x-2">
        {isEditing ? (
          <>
            <Button onClick={handleUpdate} >
              <Check size={16} />
            </Button>
            <Button onClick={() => setIsEditing(false)}>
              <X size={16} />
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => dispatch({ type: TOGGLE_TODO, payload: todo.id })}
              
            >
              {todo.completed ? <X size={16} /> : <Check size={16} />}
            </Button>
            <Button onClick={() => setIsEditing(true)}>
              <Edit size={16} />
            </Button>
            <Button
              onClick={() => dispatch({ type: DELETE_TODO, payload: todo.id })}
              
            >
              <Trash2 size={16} />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
