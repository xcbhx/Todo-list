// localStorage.js
export const saveState = (state) => {
  try {
    localStorage.setItem("todos", JSON.stringify(state.todos));
    localStorage.setItem("filters", JSON.stringify(state.filters));
  } catch (error) {
    console.error("Error saving state to LocalStorage:", error);
  }
};

export const loadState = () => {
  try {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    const savedFilters = JSON.parse(localStorage.getItem("filters"));

    return {
      todos: Array.isArray(savedTodos) ? savedTodos : [],
      filters: savedFilters || "all", 
    };
  } catch (error) {
    console.error("Error loading state from LocalStorage:", error);
    return undefined;
  }
};