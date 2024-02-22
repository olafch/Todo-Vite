import { Todo } from "../todos/models/todo.model";

const Filters = {
  All: "All",
  Completed: "Completed",
  Pending: "Deleted",
};

const state = {
  todos: [
    new Todo("La pieda del alma"),
    new Todo("La pieda del espacio"),
    new Todo("La pieda del tiempo"),
    new Todo("La pieda del poder"),
    new Todo("La pieda del realidad"),
  ],
  filter: Filters.All,
};

const initStore = () => {
  loadStore();
  console.log("InitStore 🥑");
};

const loadStore = () => {
  if (!localStorage.getItem("state")) return;
  const { todos = [], filter = Filters.All } = JSON.parse(
    localStorage.getItem("state")
  );
  state.todos = todos;
  state.filter = filter;
};

const saveStateToLocalStorage = () => {
  localStorage.setItem("state", JSON.stringify(state));
};

const getTodos = (filter = Filters.All) => {
  switch (filter) {
    case Filters.All:
      return [...state.todos];
    case Filters.Completed:
      return state.todos.filter((todo) => todo.done);
    case Filters.Pending:
      return state.todos.filter((todo) => !todo.done);
    default:
      throw new Error(`Option ${filter} isn't valid.`);
  }
};

/**
 *
 * @param {String} description
 */
const addTodo = (description) => {
  if (!description) throw new Error("Description is required");

  state.todos.push(new Todo(description));
  saveStateToLocalStorage();
};

/**
 *
 * @param {String} todoId Todo identifier
 */
const toggleTodo = (todoId) => {
  state.todos = state.todos.map((todo) => {
    if (todo.id === todoId) {
      todo.done = !todo.done;
    }
    return todo;
  });
  saveStateToLocalStorage();
};

const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
  saveStateToLocalStorage();
};

const deleteCompleted = () => {
  state.todos = state.todos.filter((todo) => !todo.done);
  saveStateToLocalStorage();
};

/**
 *
 * @param {Filters} newFilter
 */
const setFilter = (newFilter = Filters.All) => {
  state.filter = newFilter;
  saveStateToLocalStorage();
};

const getCurrentFilter = () => {
  return state.filter;
};

export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  getTodos,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
};
