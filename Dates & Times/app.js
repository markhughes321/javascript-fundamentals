// Dates and Times

const today = new Date();
console.log(today)

const birthday = new Date('9-10-1981 11:25:00')
console.log(birthday)

const birthdayTwo = new Date('September 10 1981')
console.log(birthdayTwo)

const birthdayThree = new Date('9/10/1981')
console.log(birthdayTwo)

// Get the month
val = today.getMonth()
console.log(val)

// Get the date
val1 = today.getDate()
console.log(val1)

// Get the day
val2 = today.getDay()
console.log(val2)

// Get the year
val3 = today.getFullYear()
console.log(val3)

// Get the hour
val4 = today.getHours()
console.log(val4)

// Get the mins
val5 = today.getMinutes()
console.log(val5)

// Get the seconds
val6 = today.getSeconds()
console.log(val6)

// Get the milli secs
val7 = today.getMilliseconds()
console.log(val7)

// Get the timestamp
val8 = today.getTime()
console.log(val8)

// Set birthday
birthday.setMonth(2)
console.log(birthday)