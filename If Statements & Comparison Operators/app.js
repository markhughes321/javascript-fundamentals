// If Statements & Comparison Operators

const id = 100;

// Equal to
if(id == 100){
  console.log('Correct')
} else {
  console.log('Incorrect')
}

// Not equal to
if(id != 100){
  console.log('Correct')
} else {
  console.log('Incorrect')
}

// Equal to value and type
if(id === 100){
  console.log('Correct')
} else {
  console.log('Incorrect')
}

// Test if defined
if(typeof id !== 'undefined'){
  console.log(`The ID is ${id}`)
} else {
  console.log('No ID')
}

// Greater than or equal to
if(id >= 200){
  console.log('Correct')
} else {
  console.log('Incorrect')
}

// If Else
const color = 'Yellow'
if(color === 'Red'){
  console.log('Color is Red')
} else if(color === 'Blue') {
  console.log('Color is Blue')
} else {
  console.log('Color is not present')
}

// Logical Operators AND &&
const name = 'Steve'
const age = 15
if(age > 0 && age < 12 ){
  console.log(`${name} is a child`)
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager`)
} else {
  console.log('Steve is an adult')
}

// Logical Operators OR ||
const name2 = 'Steve'
const age2 = 15
if(age < 16 || age > 65 ){
  console.log(`${name} can't run in race`)
} else {
  console.log(`${name} is registered for the race`)
}

// Ternary Operator 
console.log(id === 100 ? 'Correct' : 'Incorrect')

// Without brackets  
if(id === 300)
console.log('Correct')
else 
console.log('Incorrect')



