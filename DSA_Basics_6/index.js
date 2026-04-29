// Using the built-in Map structure in Node.js
const phoneBook = new Map();

// 1. Insert (Set) data
phoneBook.set("Alice", "555-0199");
phoneBook.set("Bob", "555-0200");
phoneBook.set("Charlie", "555-0311");

// 2. Retrieve (Get) data - extremely fast O(1)
console.log(phoneBook.get("Bob")); // Output: "555-0200"

// 3. Check if a key exists
console.log(phoneBook.has("Alice")); // Output: true

// 4. Delete an entry
phoneBook.delete("Charlie");

console.log(phoneBook.size); // Output: 2
