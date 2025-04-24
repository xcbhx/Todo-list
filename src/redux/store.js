import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import filtersReducer from "./filtersSlice";
import sortingReducer from "./sortingSlice";
import { loadState, saveState } from "./localStorage";

const preloadedState = loadState() || { 
  todos: [
    { id: 1, text: "Learn Redux", completed: false }
  ], 
  filters: 'all',
}; 

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    filters: filtersReducer,
    sorting: sortingReducer,
  },
  preloadedState, // This sets the initial state when the app starts
});

store.subscribe(() => {
  saveState({
    todos: store.getState().todos,
    filters: store.getState().filters,
    sorting: store.getState().sorting
  });
});