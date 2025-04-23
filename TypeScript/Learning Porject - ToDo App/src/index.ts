import { addTodo, removeTodo, getTodos } from "./todo.js"; // Note the .js extension

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector<HTMLFormElement>("#todo-form");
    const input = document.querySelector<HTMLInputElement>("#todo-input");
    const list = document.querySelector<HTMLOListElement>("#todo-list");
    
    if (!form || !input || !list) {
        console.error("Required DOM elements not found");
        return;
    }
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (input.value.trim()) {
            addTodo(input.value.trim());
            renderTodos();
            input.value = ""; // Clear input after adding
        }
    });
    
    function renderTodos(): void {
        if (!list) return; // Ensure list is defined
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
    
    // Initialize the list when the DOM is ready
    renderTodos();
});
