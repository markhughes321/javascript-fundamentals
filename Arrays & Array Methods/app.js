// Arrays & Array Methods
const numbers = [1,2,3,4,5,6,7,8,9];
const numbers2 = new Array(1,2,3,4,5,6,7,8,9);
const fruit = ['Apple', 'Banana', 'Pear', 'Mango'];
const mixed = [1, 'hello', true, undefined, null, {a:1, b:2}, new Date()];
const randomNumbers = [30, 47, 139, 2, 4, 64, 83, 22, 309, 2000, 45]

console.log(numbers);
console.log(numbers2);
console.log(fruit);
console.log(mixed);

// Get array length 
val = numbers.length;
console.log(val);

// Check if array 
val1 = Array.isArray(numbers);
console.log(val1);

// Get single value
val2 = numbers[3];
console.log(val2);

// Insert into array 
numbers2[2] = 100;
console.log(numbers);

// Find index of value 
val3 = numbers.indexOf(9)
console.log(val3);

// Mutating arrays
// Add onto end
val4 = mixed.push(250)
console.log(val4);

// Add onto start
val5 = mixed.unshift(250)
console.log(val5);

// Take off from end
numbers2.pop();

// Take off from start
numbers2.shift();

// Splice values
numbers.splice(0,2)
console.log(numbers)

// Reserve array
numbers.reverse()
console.log(numbers)

// Concatenate array
val6 = numbers.concat(numbers2)
console.log(val6)

// Sorting array
val7 = fruit.sort()
console.log(val7)

// Sorting numbers array
val8 = randomNumbers.sort(function(x,y){
  return x - y;
})
console.log(val8)

// Reverse sort numbers
val9 = randomNumbers.sort(function(x,y){
  return y - x;
})
console.log(val9)


// Find 
function under5(num) {
  return num < 5;
}
val = numbers.find(under5)
console.log(numbers)