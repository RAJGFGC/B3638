// Sample code for array destructuring in JavaScript - compare with and without destructuring

// Without destructuring
const numbers = [1, 2, 3];
const first = numbers[0];
const second = numbers[1];
const third = numbers[2];

console.log("Without destructuring:");
console.log("First:", first);
console.log("Second:", second);
console.log("Third:", third);

// With destructuring
const [firstDestructured, secondDestructured, thirdDestructured] = numbers;

console.log("\nWith destructuring:");
console.log("First:", firstDestructured);
console.log("Second:", secondDestructured);
console.log("Third:", thirdDestructured);

// Destructuring with default values
const [a = 10, b = 20, c = 30] = [5, 15];

console.log("\nWith destructuring and default values:");
console.log("A:", a);
console.log("B:", b);
console.log("C:", c);
