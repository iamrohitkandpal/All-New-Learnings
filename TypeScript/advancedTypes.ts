// In this code snippet, we will explore advanced types in TypeScript.
// We will cover union types, intersection types, type guards, and type aliases.

interface User {
    id: number;
    name: string;
    email?: string;
}

 // The "type" creates a new type with only id and name properties
type UserPreview = Pick<User, 'id' | 'name'>;

