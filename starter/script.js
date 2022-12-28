// 32. Active Strict Mode
// 'use strict'; // helps us see the bugs in our code, 1. forbits us to write certain code 2. shows us errors

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true; // ovde smo namerno napisali Driver umesto Drivers, u obicnom JS u konzoli se nista ne bi pokazalo dok u strict modu nam tacno kaze da je problem u hasDriverLicense
// if (hasDriversLicense) console.log("I can drive.")

// 33. Functions
// function logger() {
//     console.log("My name is Mejra");
// }

// // calling / running/ invoking function
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice
// } 

// const orangeJuice = fruitProcessor(4, 12)
// const appleJuice = fruitProcessor(10, 0);
// const appleOrangeJuice = fruitProcessor(6, 6);

// console.log(appleJuice);




// 35. Arrow functions

// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }

// //Arrow function equivalent
// const calcAge2 =  birthYear => 2022 - birthYear; // good for one liner functions

// const age = calcAge2(2000)
// console.log(age);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(2004, "Mejra"));

// // 36 Functions calling other functions


// function fruitCutter(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = fruitCutter(apples);
//     const orangePieces = fruitCutter(oranges);
//     console.log(apples, oranges);
//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} oranges pieces.`;
//     return juice
// } 

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }

// const yearsUntilRetirement = (birthYear, firstName) => {

//     const age = calcAge(birthYear)
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired.`);
//         return -1;
//     }

// }

// console.log(yearsUntilRetirement(2004, "Mejra"));

// 39. arrays

// const song1 = "Man's World";
// const song2 = 'Venus Fly Trap';
// const song3 = 'Power & Control';

const songs = ["Man's World", "Venus Fly Trap", "Power & Control"]

console.log(songs)

// const years = new Array(1989, 1999, 2000, 2004)

console.log(songs[0]);
console.log(songs.length);
console.log(songs[songs.length - 1])

songs[2] = "Lies" // replace the last element with a new one
console.log(songs)

const firstName = "taylor";
const taylor = [firstName, 'Swift', 2022 - 1989, 'singer', songs];
console.log(taylor)

// Exercise
const calcAge = function(birthYear) {
    return 2022 - birthYear;
}

const years = [1991, 1989, 2000, 2004]

const age1 = calcAge(years[2]);
console.log(age1);
