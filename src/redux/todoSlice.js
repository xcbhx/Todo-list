import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { 
    id: 1, 
    text: "Learn Redux", 
    completed: false,
    dueDate: "2025-12-31",
    priority: "High",
    // category: "Work"
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { text, dueDate, priority} = action.payload
      state.push({ 
        id: Date.now(), 
        text,
        dueDate,
        priority,
        // category,
        completed: false,
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