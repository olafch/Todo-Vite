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
  console.log(state);
  console.log("InitStore 🥑");
};

const loadStore = () => {
  throw new Error("Not implemented");
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
};

const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
};

const deleteCompleted = () => {
  state.todos = state.todos.filter((todo) => !todo.done);
};

/**
 *
 * @param {Filters} newFilter
 */
const setFilter = (newFilter = Filters.All) => {
  state.filter = newFilter;
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
