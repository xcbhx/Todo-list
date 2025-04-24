import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import filtersReducer from "./filtersSlice";
import { loadState, saveState } from "./localStorage";

const preloadedState = loadState() || { todos: [] }; 

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    filters: filtersReducer,
  },
  preloadedState, // This sets the initial state when the app starts
});

store.subscribe(() => {
  saveState({
    todos: store.getState().todos,
    filters: store.getState().filters,
  });
});