import html from "./app.html?raw";
import todoStore from "../store/todo.store";
import { renderTodos } from "./use-cases";

const ElementIDs = {
  TodoList: ".todo-list",
};

/**
 *
 * @param {String} elementId
 */

const displayTodos = () => {
  const todos = todoStore.getTodos(todoStore.getCurrentFilter());
  renderTodos(ElementIDs.TodoList, todos);
};

//Cuando la función app se llama
export const App = (elementId) => {
  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();
};
