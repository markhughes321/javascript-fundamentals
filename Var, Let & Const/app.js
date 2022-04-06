// Var, Let, Const

// VAR
var name = 'John doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

// Initialise var
var greeting;
console.log(greeting);
greeting = 'hello';
console.log(greeting);

// Multi word variables 
var firstName = 'John'; // Camel case
var first_name = 'Pat'; // Underscore
var FirstName = 'Lisa'; // Pascal case

// LET 
// Works the same as var with block level scope 
var nameTwo = 'Robert Fitz';
console.log(nameTwo);
nameTwo = 'Steve Smith';
console.log(nameTwo);

// CONST 
// Can't be reassigned
// Has to be assigned a value
const nameThree = 'Mark Hughes';
console.log(nameThree);
// nameThree = 'Steve Smith' (Error)

// Const can be mutated
const person = {
  name: 'Luke',
  age: 28
}
person.name = 'Sara'
console.log(person)

// Can update arrays and objects
const numbers = [1,2,3,4,5];
numbers.push(6)
// const numbers = [1,2,3,4,5,6] (Error) 
console.log(numbers)