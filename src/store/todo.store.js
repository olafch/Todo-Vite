import { Todo } from "../todos/models/todo.model";

const Filters = {
  All: "All",
  Completed: "Completed",
  Pending: "Deleted",
};

const state = {
  todos: [
    new Todo("La pieda del alma"),
    new Todo("La pieda del infinito"),
    new Todo("La pieda del tiempo"),
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

/**
 *
 * @param {String} description
 */
const addTodo = (description) => {
  throw new Error("Not implemented");
};

/**
 *
 * @param {String} todoId Todo identifier
 */
const toggleTodo = (todoId) => {
  throw new Error("Not implemented");
};

const deleteTodo = (todoId) => {
  throw new Error("Not implemented");
};

const deleteCompleted = () => {
  throw new Error("Not implemented");
};

const setFilter = (newFilter = Filters.All) => {
  throw new Error("Not implemented");
};

const getFilter = () => {
  throw new Error("Not implemented");
};

export default {
  deleteCompleted,
  deleteTodo,
  getFilter,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
};
