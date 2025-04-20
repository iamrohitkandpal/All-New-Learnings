// In this file, we will define a variable and assign it a value

// The variable will be of type string, number, and boolean
// We will also define an array of strings and an object with properties
let isActive: boolean = true;
let total: number = 50;
let userName: string = "devUser";
let items: string[] = ["apple", "banana", "orange"];
let user: { name: string; age: number } = { name: "John", age: 30 };
let tuple: [string, number] = ["age", 20];


//  Now we will learn how to use type assertions in TypeScript 
//  Type assertions allow us to tell the compiler what type we expect a variable to be
let someNum:any = 48;
let someValue: any = "this is a string";
let numValue: number = someNum as number; // Using 'as' syntax
let numValue2: number = <number>numValue; // Using angle-bracket syntax
let strLength: number = (someValue as string).length; // Using 'as' syntax
let strLength2: number = (<string>someValue).length; // Using angle-bracket syntax


// Type assertions do not change the runtime behavior of the code, they only affect the type checking at compile time
// Tip: Use "unknown" instead of "any" when you're not sure about a variable's type