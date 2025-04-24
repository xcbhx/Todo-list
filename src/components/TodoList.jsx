import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todoSlice";
import { FILTERS } from "../redux/filtersSlice"; 
import { SORTING } from "../redux/sortingSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos); 
  const filter = useSelector((state) => state.filters); 
  const sorting = useSelector((state) => state.sorting);
  const dispatch = useDispatch();
  const [removingId, setRemovingId] = useState(null);

  const handleDelete = (id) => {
    setRemovingId(id);
    setTimeout(() => {
      dispatch(deleteTodo(id));
      setRemovingId(null);
    }, 300);
  };

  
  const filteredTodos = todos.filter((todo) => {
    if (filter === FILTERS.ACTIVE) return !todo.completed;
    if (filter === FILTERS.COMPLETED) return todo.completed;
    return true; 
  });

  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if (sorting === SORTING.NEWEST_FIRST) return b.id - a.id;
    if (sorting === SORTING.OLDEST_FIRST) return a.id - b.id;
    if (sorting === SORTING.COMPLETED_FIRST) return b.completed - a.completed;
  });
  
  
  return (
    <ul>
      {sortedTodos.map((todo) => ( 
        <li
          key={todo.id}
          className={`${todo.completed ? "completed" : ""} ${removingId === todo.id ? "removed" : ""}`}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleComplete(todo.id))}
          />
          <div>{todo.text}</div>
          <div>{todo.dueDate}</div>
          <button onClick={() => handleDelete(todo.id)}>❌</button>
          <div>{todo.priority}</div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;