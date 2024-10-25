import React, { createContext, useContext, useState } from 'react';

// Create the context
const TodoContext = createContext();

// Create a custom hook to use the TodoContext
export const useTodos = () => useContext(TodoContext);

// Create the TodoProvider to manage the state and share it globally
export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
