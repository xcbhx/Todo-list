import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import FilterControls from './components/FilterControls';
import SortingControls from './components/SortingControls';


function App() {


  return (
    <div>
      <h1>Redux To-Do List</h1>
      <AddTodo />
      <FilterControls />
      <SortingControls />
      <TodoList />
    </div>
  )
}

export default App
