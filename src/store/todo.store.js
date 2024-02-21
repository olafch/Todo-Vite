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

export default {
  initStore,
};
