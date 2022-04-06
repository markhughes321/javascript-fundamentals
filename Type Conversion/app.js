// Type Conversion

let val;

// Number to string
val = String(5);
val = String(4+4);
// Output
console.log(val)
console.log(typeof val);
console.log(val.length);

// Boolean to string
val = String(true);
// Output
console.log(val)
console.log(typeof val);
console.log(val.length);

// Date to string
val = String(new Date());
// Output
console.log(val)
console.log(typeof val);
console.log(val.length);

// Array to string
val = String([1,2,3,4]);
// Output
console.log(val);
console.log(typeof val);
console.log(val.length);

// toString
val = (5).toString();
val = (true).toString();
// Output
console.log(val);
console.log(typeof val);
console.log(val.length);

// String to number
val = Number('5');
// Output
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(3));

// Boolean to number
val = Number(true);
val = Number(null);
val = Number(null); // Nan Not a number
val = Number([1,2,3]); // Nan Not a number
val = Number(false);
val = parseInt(100.30);
val = parseFloat(100.3);
// Output
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(2)); // to 2 decial places


// TYPE COHERSION
// Number to string
const val1 = String(1);
const val2 = 2;
const sum = val1 + val2;
// Output
console.log(sum);
console.log(typeof sum);


// String to Number
const val3 = String(1);
const val4 = 2;
const sum2 = Number(val1 + val2);
// Output
console.log(sum2);
console.log(typeof sum2);
