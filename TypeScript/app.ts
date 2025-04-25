// Basic Types //
let a = 12;
let b: [number, string] = [1, "hello"];

enum Color {
    Red = 1,
    Green = 2,
    Blue = 3
}

let c: number = 100;
let u: unknown;
u = 100;
u = "Hello!";

if (typeof u === "string") {
    console.log(u.length); // Type Narrowing
}


// Type Inference //



// Interfaces //
function abcd(a: number, b: number) {           // Function Declaration
    return a + b;
}

interface User {                              // Defining an interface
    id: number;
    name: string;
    age?: number;
}
interface Admin extends User {                // Extending an interface
    admin: boolean
}

function getDataOfUser(obj: Admin) {          // Function with interface as parameter
    console.log(obj);
}

getDataOfUser({ id: 1, name: "John", age: 32, admin: true });


// Type Aliases //
type value = string | number;                 // Type Alias

function abc(a: value) {                       // Function with type alias as parameter
    return a;
}

type newUser = {
    id: number;
    name: string;
}

type newAdmin = newUser & {                 // Type Alias with intersection
    getDetails(user: string): void;
}

function getDetails(user: newAdmin) {       // Function with type alias as parameter
    console.log(user);
    user.getDetails("John Doe");
}


// Classes //
class Device {                              // Class Declaration with constructor
    name: string;
    price: number;
    color: string;
    constructor(name:string, price: number, color:string) {
        this.name = name;                   
        this.price = price;
        this.color = color;
    }
}

let d1 = new Device("LG", 2000, "White");   
let d2 = new Device("Samsung", 3000, "Black");                      

