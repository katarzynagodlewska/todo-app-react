import React from 'react';
import './App.css';

import './styles/button.css';
import './styles/input.css';
import './styles/todo.css';
import './styles/todoList.css';

import {TodoList} from './components/TodoList';


function App() {
return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
