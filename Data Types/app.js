// Data Types

// Primative Data Type
// Stored directly in the location the variable accesses
// Stored on the stack
// String, Number, Boolean, Null, Undefined, Symbols(ES6)

// Reference Data Types
// Accessed by reference 
// A pointer to a location in memory
// Objects that are stored on the heap
// Arrays, Objects Literals, Functions, Dates, Anything else..

// Dynamically Typed Language
// Types are associated with values not variables. In JavaScript we do
//   not need to specify types unlike other statically typed languages
//   e.g. Java, C#, C++. However there are are supersets of JS that allow
//   for static typing e.g. TypeScript 


// PRIMATIVE TYPES
// String
const name = 'John Doe';
console.log(typeof name)
// Number
const number = 45;
console.log(typeof number)
// Boolean
const hasKids = true;
console.log(typeof hasKids)
// Null
const hasCar = null;
console.log(typeof hasCar)
// Undefined
let hasTest;
console.log(typeof hasTest)
// Symbol
const sym = Symbol()
console.log(typeof sym)


// REFERENCE TYPES
// Array
const hobbies = ['movies', 'basketball']
console.log(typeof hobbies)
// Object Literal
const address = {
  city: 'London',
  country: 'UK'
}
console.log(typeof address)
// Dates
const today = new Date()
console.log(typeof today)