import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { 
    id: 1, 
    text: "Learn Redux", 
    completed: false,
    dueDate: "2025-12-31"
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { text, dueDate } = action.payload
      state.push({ 
        id: Date.now(), 
        text,
        completed: false,
        dueDate,
      });
    },
    toggleComplete: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;