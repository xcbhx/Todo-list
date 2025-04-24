import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';


function App() {


  return (
    <div>
      <h1>Redux To-Do List</h1>
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
