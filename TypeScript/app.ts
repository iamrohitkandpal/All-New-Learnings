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

function abc(a: value) {                      // Function with type alias as parameter
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


// Classes & Constructors //
class Device {                              // Class Declaration with constructor
    name: string;
    price: number;
    color: string;
    constructor(name: string, price: number, color: string) {
        this.name = name;
        this.price = price;
        this.color = color;
    }
}

let d1 = new Device("LG", 2000, "White");
let d2 = new Device("Samsung", 3000, "Black");


// Access Modifiers & Readonly // 
class BottleMaker {
    private halua: string = " Halua";        // Private Property
    protected mithai: string = " Mithai";    // Protected Property
    constructor(public name: string) { }   // Public Property
}
class MetalBottleMaker extends BottleMaker {
    constructor(name: string) {
        super(name);
    }
    getValue() {
        console.log(this.name, this.mithai);
    }
}

let b1 = new MetalBottleMaker("Bottle Maker");
b1.getValue();


// Readonly, Optional & Parameter Properties //
class UserDetails {
    constructor(public readonly name: string, public age: number, public email?: string) { // Optional Parameter
        this.name = name;
    }
}


// Getters & Setters //
class Person {
    constructor(public _name: string, public age: number) { }

    get name() {                        // Getter
        return this._name;
    }
    set name(value: string) {           // Setter
        this._name = value;
    }
}

let p1 = new Person("John", 25);


// Static Members //
class SheryJS {
    static version: number = 1.15;      // Static Property
    static getMath() {                  // Static Method
        return Math.random();
    }
}


// Abstract Classes & Methods //
abstract class Payment {
    constructor(protected amount: number) { }           // Abstract Class
    abstract getPaymentValid(amount: number): void;     // Abstract Method
}

class Paytm extends Payment {
    constructor(amount: number) {
        super(amount);
    }
    getPaymentValid(amount: number) {                   // Implementing Abstract Method
        console.log("Paytm Payment Validated", amount);
    }
}


// Functions in TypeScript //
function callB(name: string, cb: (value: string) => void) {
    console.log(name);
    cb(name);                                    // Callback function
}
callB("John", (name: string) => {
    console.log(name);
});


// Optional & Default Parameters //
function abcdef(name: string, gender?: string, age: number = 25) {
    console.log(name, gender, age);
}
abcdef("John", "Male");                          // Optional Parameter


// Rest Parameters //
function sum(...arr: number[]) {                 // Rest Parameter
    let total = arr.reduce((a, b) => a + b, 0);
    console.log(total);
}
sum(1, 2, 3, 4, 5);


// Function Overloading //
function abd(a: string): void;
function abd(a: string, b: number): number;
function abd(a: any, b?: any): any {
    if (typeof a === "string" && b === undefined) {
        console.log(a);
    }
    else if (typeof a === "string" && typeof b === "number") {
        return a.length + b;
    }
}
abd("Hello");                          // Function Overloading
abd("Hello", 5);                       // Function Overloading


// Generics //
function log<T>(val: T) {              // Generic Function
    console.log(val);
}
log("Hey");

interface Halwa<T> {                   // Generic Interface
    name: string;
    price: number;
    key: T
}
function getHalwa(obj: Halwa<string>) { };
getHalwa({ name: "Lauki Kalwa", price: 200, key: "Lauki" });

class BatliMaker<T> {                  // Generic Classes
    constructor(public key: T) { }
}
let bt1 = new BatliMaker("NewBatli");
let bt2 = new BatliMaker(1000);


// Type Assertions & Casting //
let ne: any = 12;
(ne as number).toString();             // Type Assertion
<number>ne;

let bo: null | undefined | string;
bo = "Hey";
a!.toFixed(2);                         // Non-null Assertion Operator
bo?.toString();                        // Optional Chaining Operator


// Type Guards //
function guard(arg: string | number) {
    if (typeof arg === "string") {
        console.log(arg.length);            // Type Guard
    }
    else if (typeof arg === "number") {
        console.log(arg.toFixed(2));        // Type Guard
    }
    else {
        throw new Error("Paagal ho Kya");
    }
}
guard(12);
guard("Hello");
// guard(true);                          


// Type Narrowing //
class Remote {
    switchoff() {
        console.log("Switch Off");
    }

}
class CarKaRemote {
    swtchoff() {
        console.log("Car Switch Off");
    }
}
const tv = new Remote();
const car = new CarKaRemote();

function switchOffKaro(device: Remote | CarKaRemote) {
    if(device instanceof Remote) {
        device.switchoff();                  // Type Guard with instanceof
    }
    else if(device instanceof CarKaRemote) {
        device.swtchoff();                   // Type Guard with instanceof
    }
    else {
        throw new Error("Paagal ho Kya Remote Kaha hai");
    }
}
switchOffKaro(tv);
switchOffKaro(car);

