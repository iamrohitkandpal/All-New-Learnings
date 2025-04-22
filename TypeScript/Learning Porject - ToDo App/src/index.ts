import { addTodo, removeTodo, getTodos } from "./todo";

const form = document.querySelector<HTMLFormElement>("#todo-form")!;
const input = document.querySelector<HTMLInputElement>("#todo-input")!;
const list = document.querySelector<HTMLOListElement>("#todo-list")!;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value.trim()) {
        addTodo(input.value.trim());
        renderTodos();
        input.value = ""; // Clear input after adding
    }
});

function renderTodos(): void {
    list.innerHTML = "";
    getTodos().forEach((todo) => {
        const li = document.createElement("li");
        li.textContent = todo.text;
        
        const button = document.createElement("button");
        button.textContent = "Delete";
        button.addEventListener("click", () => {
            removeTodo(todo.id);
            renderTodos();
        });

        li.appendChild(button);
        list.appendChild(li);
    });
}

// Initialize the list when the page loads
document.addEventListener("DOMContentLoaded", renderTodos);
