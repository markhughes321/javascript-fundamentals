// General Loops

// For loops
for(let i = 0; i < 10; i++){
  console.log(i)
}

// For loops - continue and break
for(let x = 0; x < 10; x++){
  if(x === 2){
    console.log('2 is my favourite number')
    continue;
  }
  if(x === 5){
    console.log('Stop the loop')
    break;
  }
  console.log('Number ' + x)
}

// While loop
let y = 0;
while(y < 10){
  console.log('While loop number ' + y);
  y++
}

// Do while loop - will always run once no matter what
let a = 0;
do {
  console.log('Do while loop ' + a)
  a++
}
while(a < 10)

// For loop through array
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota']
let v = 0;
for (let v = 0; v < cars.length; v++){
  console.log(cars[v])
}

// For each array loop
cars.forEach(function(car){
  console.log('For loop ' + car)
})

// For each array loop - index
cars.forEach(function(car, index){
  console.log(`${index} : ${car}`)
}) 

// For each array loop - array
cars.forEach(function(car, array){
  console.log('Array ' + array)
}) 

// For in array loop - array
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
}
for(let m in user){
  console.log(`${m} : ${user[m]}`)
}

// Map
const users = [
  {id:1, name: 'John'},
  {id:2, name: 'Mark'},
  {id:3, name: 'Sara'}
];

const ids = users.map(function(user){
  return user.id; 
});

console.log(ids)