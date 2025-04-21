// math.ts

export function add(x:number, y:number): number {
    return x + y;
}

// app.ts 

import { add } from './math'; // Importing the add function from math.ts
console.log(add(2, 3)); // Output: 5