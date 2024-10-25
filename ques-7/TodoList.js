import React from 'react';
import TodoItem from './TodoItem';
import { useTodos } from './TodoContext';

function TodoList() {
  const { todos } = useTodos(); // Access todos from context

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
