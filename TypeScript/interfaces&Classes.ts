// Use of interfaces in TypeScript. A powerful way to define the structure of an object.

interface User {
    id: number;
    name: string;
    isAdmin?: boolean; // Optional property
    email?: string; // Optional property
    age?: number; // Optional property
}

function greet(user:User): string {
    return `Hello, ${user.name}, isAdmin: ${user.isAdmin ?? false}!`;
}

const newUser: User = {
    id: 1,
    name: "Rohit",
    isAdmin: true,
};

console.log(greet(newUser)); // Output: Hello, Rohit, isAdmin: true!


// Use of classes in TypeScript. A demonstration of how to create a class and use it. Also using inheritance here.

class Animal {
    constructor(public name: string) {};
    move(distance: number): void {
        console.log(`${this.name} moved ${distance}m.`);
    }
}

class DOg extends Animal {
    bark(): void {
        console.log("Woof Woof!");
    }
}

const dog = new DOg("Rex");
dog.move(100); // Output: Rex moved 100m.
dog.bark(); // Output: Woof Woof!