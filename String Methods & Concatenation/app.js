// String Methods & Concatenation

// Concatenation
const firstName = 'William';
const lastName = 'Hughes';

val = firstName + ' ' + lastName;
console.log(val);

// Append
val2 = 'Brad ' 
val2 += lastName;
console.log(val2);

// Escaping 
val3 = 'That\'s awesome, I can\'t wait' 
console.log(val3);

// Length
val4 = firstName.length;
console.log(val4)

// Concat
val5 = firstName.concat(' ', lastName);
console.log(val5)

// Change case
val6 = firstName.toUpperCase();
val7 = firstName.toLowerCase();
console.log(val6)
console.log(val7)

// Index of
val8 = firstName.indexOf('l');
val9 = firstName.lastIndexOf('l');
console.log(val8)
console.log(val9)

// chatAt()
val10 = firstName.charAt('2');
console.log(val10)

// Get last chat
val11 = firstName.charAt(firstName.length - 1);
console.log(val11)

// substring()
val12 = firstName.substring(0, 4);
console.log(val12)

// slice()
val13 = firstName.slice(0, 4);
val14 = firstName.slice(-4);
console.log(val14)

// split()
const str = 'Hello there my name is Mark'
const tags = 'web design,web development,programming'
val15 = str.split(' ');
val16 = tags.split(',');
console.log(val15)
console.log(val16)

// replace()
val17 = str.replace('Mark', 'Jack')
console.log(val17)

// includes()
val18 = str.includes('Mark')
console.log(val18)