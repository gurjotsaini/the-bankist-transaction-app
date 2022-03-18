/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/**********************************************************
 * Converting & Checking Numbers
 * Numbers use 64 base 2 format (Binary)
 * It means that numbers are always stored in binary format
 * Only composed of 0s and 1s
 *
 * Base 10:
 * -> 0 to 9
 * -> 1/10 = 0.1
 * -> 3/10 = 3.3333333
 *
 * Binary Base 2:
 * -> 0 1
 **********************************************************/
// console.log(23 === 23.0); // true
// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(0.1 + 0.2 === 0.3); // false

// // Conversion
// console.log(Number('23')); // 23
// console.log(+'23'); // 23

// // Parsing
// console.log(Number.parseInt('22px')); // 22
// console.log(Number.parseInt('px22')); // NaN

// console.log(Number.parseFloat('22.22px')); // 22.22
// // console.log(parseFloat('22.22px')); // 22.22

// // Check if value is NaN
// console.log(Number.isNaN(NaN)); // true
// console.log(Number.isNaN(Number.parseInt('px22'))); // true
// console.log(Number.isNaN(Number.parseFloat('px22'))); // true
// console.log(Number.isNaN(Number.parseFloat('22.22px'))); // false
// console.log(Number.isNaN(Number.parseFloat('22.22pxpx'))); // false
// console.log(Number.isNaN(Number.parseFloat('22.22pxpxpx'))); // false
// console.log(Number.isNaN('20')); // false
// console.log(Number.isNaN('20px')); // false

// // Checking if a value is a number
// console.log(Number.isFinite(Infinity)); // false
// console.log(Number.isFinite(NaN)); // false
// console.log(Number.isFinite(0)); // true
// console.log(Number.isFinite(22)); // true
// console.log(Number.isFinite(22.22)); // true
// console.log(Number.isFinite('22px')); // false
// console.log(Number.isFinite('22.22px')); // false
// console.log(Number.isFinite(23 / 0)); // false

// // Checking if a value is an integer
// console.log(Number.isInteger(22)); // true
// console.log(Number.isInteger(22.22)); // false
// console.log(Number.isInteger('22')); // false
// console.log(Number.isInteger('22px')); // false
// console.log(Number.isInteger(23 / 0)); // false

/**********************************************************
 * Math & Rounding
 **********************************************************/
// // Square root of a number
// console.log(Math.sqrt(121)); // 11
// console.log(121 ** (1 / 2)); // 11

// // Max & Min
// console.log(Math.max(1, 2, 3, 4, 5)); // 5
// console.log(Math.min(1, 2, 3, 4, 5)); // 1

// // PI
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793

// // Truncate a number
// console.log(Math.trunc(Math.random() * 11) + 1); // 0 to 11

// const randomInt = (min, max) =>
//     Math.trunc(Math.random() * (max - min + 1)) + min;
// console.log(randomInt(1, 11)); // 1 to 11

// // Rounding numbers
// console.log(Math.round(22.5)); // 23
// console.log(Math.round(22.4)); // 22

// // Floor & Ceil
// console.log(Math.floor(22.5)); // 22
// console.log(Math.floor(-22.5)); // -23
// console.log(Math.ceil(22.5)); // 23
// console.log(Math.ceil(-22.5)); // -22

// // Rounding Decimals
// console.log((2.2).toFixed(0)); // 2
// console.log((2.9).toFixed(0)); // 3
// console.log(typeof (2.9).toFixed(0)); // string

/**********************************************************
 * The Remainder Operator
 **********************************************************/
// console.log(5 % 2); // 1
// console.log(5 / 2); // 2.5

/**********************************************************
 * Numeric Separators
 * The underscore separator we use in a long number
 * eg: 1_000_000
 **********************************************************/
// const diameter = 287_460_000_000;
// console.log(diameter); // 28746000000

/**********************************************************
 * Working With BigInt
 *
 * There are some Exceptions of BigInt:
 * => Comparison Operators (===)
 *   -> BigInts are not equal to other types
 * => Plus Operators (+)
 *   -> BigInts are not added to other types
 * => Math Operators (eg. sqrt, pow, etc)
 *   -> BigInts are not supported
 * => Division Operators (/)
 *   -> BigInts are not divided by other types
 **********************************************************/
// Largest number that can be stored in a 64 bit number
// console.log(2 ** 53 - 1); // 9007199254740991
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// console.log(234245324534262357537532753723457327535273554253215423n);
// console.log(BigInt(234245324534262357537532753723457327535273554253215423));

// // Operations
// console.log(10000n + 10000n); // 20000
// console.log(
//     234245324534262357537532753723457327535273554253215423n *
//         234245324534262357537532753723457327535273554253215423n
// );

/**********************************************************
 * Creating Dates
 *
 * => Basically 4 ways of creating dates
 * => Months start at 0
 **********************************************************/
// const now = new Date();
// console.log(now); // Wed Mar 09 2022 19:41:57 GMT+0530 (India Standard Time)

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
// const future = new Date(2022, 2, 11, 00, 00, 00);
// console.log(future);
// console.log(future.getFullYear()); // 2022
// console.log(future.getMonth()); // 2
// console.log(future.getDate()); // 11
// console.log(future.getDay()); // 5
// console.log(future.getHours()); // 0
// console.log(future.getMinutes()); // 0
// console.log(future.getSeconds()); // 0
// console.log(future.getMilliseconds()); // 0
// console.log(future.toISOString()); // 2020-03-11T00:00:00.000Z
// console.log(future.getTime());

// console.log(new Date(1646937000000));

// console.log(Date.now());

// future.setFullYear(2023);
// console.log(future.getFullYear()); // 2023

/**********************************************************
 * Operations With Dates
 **********************************************************/
// const future = new Date(2023, 2, 11, 00, 00, 00);
// console.log(+future);

// const calcDaysPassed = (date1, date2) =>
//     Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

// const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
// console.log(days1);

/**********************************************************
 * Timers & SetInterval / SetTimeout
 **********************************************************/
// setTimeout(() => {
//     console.log('Here is your Pizza');
// }, 3000);

// setInterval(() => {
//     console.log('Console log every second');
// }, 1000);
