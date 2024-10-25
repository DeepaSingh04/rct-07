import React, { useState } from 'react';
import { useTodos } from './TodoContext';

function TodoForm() {
  const [text, setText] = useState('');
  const { addTodo } = useTodos(); // Consume context to access addTodo

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;