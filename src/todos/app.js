import html from "./app.html?raw";

/**
 *
 * @param {String} elementId
 */

//Cuando la función app se llama
export const App = (elementId) => {
  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
  })();
};
