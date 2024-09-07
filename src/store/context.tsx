import React, { createContext, useContext, useReducer, ReactNode, Dispatch } from "react";


type Todo = {
  id: string;
  text: string;
  completed: boolean;
};


type State = {
  todos: Todo[];
};


type AddTodoAction = {
  type: typeof ADD_TODO;
  payload: string; 
}
type ToggleTodoAction = {
  type: typeof TOGGLE_TODO;
  payload: string; 
};

type UpdateTodoAction = {
  type: typeof UPDATE_TODO;
  payload: { id: string; text: string }; 
};

type DeleteTodoAction = {
  type: typeof DELETE_TODO;
  payload: string; 
};


type Action = AddTodoAction | ToggleTodoAction | UpdateTodoAction | DeleteTodoAction;


const initialState: State = {
  todos: [],
};


type TodoContextType = {
  state: State;
  dispatch: Dispatch<Action>;
} | null;


const TodoContext = createContext<TodoContextType>(null);

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";

const todoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now().toString(), text: action.payload, completed: false },
        ],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};


type TodoProviderProps = {
  children: ReactNode;
};


const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};


const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};

export { useTodo, ADD_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO };
export default TodoProvider;
