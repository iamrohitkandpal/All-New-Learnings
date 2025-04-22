interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

let todos: Todo[] = [];
export function addTodo(text:string): void {
    todos.push({ id:todos.length + 1, text, completed: false });
}

export function removeTodo(id: number): void {
    todos = todos.filter((todo) => todo.id !== id);
}

export function getTodos(): Todo[] {
    return todos;
}