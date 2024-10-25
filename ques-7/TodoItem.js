import React from 'react';
import { useTodos } from './TodoContext';

function TodoItem({ todo }) {
  const { toggleTodo } = useTodos(); // Access toggleTodo from context

  return (
    <li
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
      onClick={() => toggleTodo(todo.id)}
    >
      {todo.text}
    </li>
  );
}

export default TodoItem;
