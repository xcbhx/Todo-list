export const saveState = (state) => {
  try {
    localStorage.setItem("todos", JSON.stringify(state));
  } catch (error) {
    console.error("Error saving state to LocalStorage:", error);
  }
};

export const loadState = () => {
  try {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? { todos: JSON.parse(savedTodos) } : undefined; // Ensure it returns an object
  } catch (error) {
    console.error("Error loading state from LocalStorage:", error);
    return undefined;
  }
};