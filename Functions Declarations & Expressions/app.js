// Functions Declarations & Expressions

// Functions Declarations
function greeting(){
  //console.log('Hello')
  return 'Hello'
}
console.log(greeting())

// Assigning values
function greeting2(firstName, lastName){
  return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greeting2('John', 'Doe'))

// Assigning values
function greeting3(firstName = 'John', lastName = 'Doe'){
  return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greeting3())

// Function Expressions
const square = function(x){
  return x * x
};
console.log(square(8))

// Function Expressions
const square1 = function(x = 8){
  return x * x
};
console.log(square1())

// Property Methods
const todo = {
  add: function(){
    console.log('Add todo..')
  },
  edit: function(id){
    console.log(`Edit todo ${id}`)
  }
}
todo.add();
todo.edit(20);

// Immidiately Invokeable Function Expressions - IIFEs
(function(){
  console.log('IFFE Ran..');
})();

(function(name){
  console.log('Hello ' + name)
})('Brad')