// Sample code for object destructuring in JavaScript - compare with and without destructuring

// Without destructuring
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

const name = person.name;
const age = person.age;
const city = person.city;

console.log("Without destructuring:");
console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);

// With destructuring
const {
  name: nameDestructured,
  age: ageDestructured,
  city: cityDestructured,
} = person;

console.log("\nWith destructuring:");
console.log("Name:", nameDestructured);
console.log("Age:", ageDestructured);
console.log("City:", cityDestructured);

// Destructuring with default values
const { name: a = "Unknown", age: b = 0, country: c = "Unknown" } = person;

console.log("\nWith destructuring and default values:");
console.log("Name:", a);
console.log("Age:", b);
console.log("Country:", c);
