// This is a simple example of a reusable function in TypeScript
// This function takes a generic type T and returns the same type T
// Here T is the generic type parameter that can be reused as per need of user;

function identity<T>(arg: T): T {
    return arg;
}

let str = identity<string>("Hello"); // Type is string
let num = identity<number>(123); // Type is number
let bool = identity<boolean>(true); // Type is boolean
let arr = identity<number[]>([1, 2, 3]); // Type is number[]
let obj = identity<{ name: string }>({ name: "John" }); // Type is { name: string }

// Generics shine in reusable components, allowing you to create functions, classes, and interfaces that work with any data type while maintaining type safety.

interface GenericIdentityFn<T> {
    add(item: T) : void;
    get(id: number): T | undefined;
    remove(id: number): void;
}