import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TodoProvider } from './TodoContext'; // Import the context provider

ReactDOM.render(
  <TodoProvider> 
    <App />
  </TodoProvider>,
  document.getElementById('root')
);
