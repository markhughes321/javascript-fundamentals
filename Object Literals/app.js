// Object Literals

const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@gmail.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'London',
    country: 'United Kingdom'
  },
  getBirthYear: function() {
    return 2022 - this.age;
  }
}

// Get specific value
let val = person.firstName 
console.log(val)

let val1 = person['firstName'] 
console.log(val1)

let val2 = person.hobbies[1]
console.log(val2)

let val3 = person.address.city
console.log(val3)

let val4 = person.getBirthYear()
console.log(val4)

let val5 = person.getBirthYear()
console.log(val5)

// Loop through object
const people = [
  {name: 'John', age: 30},
  {name: 'Nancy', age: 30},
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}