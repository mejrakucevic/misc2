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

// const songs = ["Man's World", "Venus Fly Trap", "Power & Control"]

// console.log(songs)

// const years = new Array(1989, 1999, 2000, 2004)

// console.log(songs[0]);
// console.log(songs.length);
// console.log(songs[songs.length - 1])

// songs[2] = "Lies" // replace the last element with a new one
// console.log(songs)

// const firstName = "taylor";
// const taylor = [firstName, 'Swift', 2022 - 1989, 'singer', songs];
// console.log(taylor)

// // Exercise
// const calcAge = function(birthYear) {
//     return 2022 - birthYear;
// }

// const years = [1991, 1989, 2000, 2004]

// const age1 = calcAge(years[2]);
// console.log(age1);

// 40 array methods
// const taylor = ['Marjorie', 'Peace', 'Dont blame me', 'My tears ricochet'];

// // ADDING ELEMENTS
// const newLength = taylor.push('Dorothea'); // Push is for adding element to the end of the list

// console.log(taylor)
// console.log(newLength)

// taylor.unshift("Invisible String"); // Unshift adds an element to the start of the list
// console.log(taylor);

// // REMOVING ELEMENTS
// taylor.pop(); // pop removes last element
// console.log(taylor);

// taylor.shift(); // Removes the first element
// console.log(taylor)

// console.log(taylor.indexOf('Peace'));

// console.log(taylor.includes("Dont blame me"));
// console.log(taylor.includes("Karma"))

// 42 introduction to objects

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2022 - 1991,
//     'teacher',
//     ['Michael', 'Peter']
// ]

// // difference between arrays and objects is that we can actually a sign a name to an element with objects, whereas with arrays we cannot.
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2022 - 1991,
//     friends:  ['Michael', 'Peter']

// jonas has 5 properties

// 43 object properties
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2022 - 1991,
//     friends:  ['Michael', 'Peter']

// }

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// // const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends')

// // if (jonas[interestedIn]) {
// //     console.log(jonas[interestedIn]);
// // } else {
// //     console.log("Wrong request bestie!")
// // }

// jonas.location = "Portugal";
// jonas["twitter"] = '@jonassch'
// console.log(jonas);

// // Jonas has 3 friends, and his best friend is called Michael

// console.log(jonas.firstName + " has " + jonas.friends.length + " friends, and his best friend is called " + [jonas.friends[0]] );

// 44 Object methods (method is a function inside of an object)

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2022 - 1991,
//     friends:  ['Michael', 'Peter'],
//     hasDriversLicense: true,

//     challenge: function() {
//         if (jonas.hasDriversLicense) {
//             console.log(`${this.firstName} is a ${this.age} year old teacher, and he has a driver's license.`)
//         } else console.log("Jonas no license")
//     }
// };

// console.log(jonas.challenge());

// 46 for

// for loop keeps running while condition is TRUE!
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} `)
// }

// 47
// const jonas = [
//         'Jonas',
//         'Schmedtmann',
//         2022 - 1991,
//         46,
//         ['Michael', 'Peter']
// ];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//     // reading from jonas array
//     console.log(jonas[i])

//     // filling types array
//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i])
// };

// console.log(types)

// const years = [1991, 2007, 1969, 2020]
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2023 - years[i]);
// }

// console.log(ages);

// continue and break
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;
//     if (typeof jonas[i] !== 'string') continue; // continue is basically skip

//     console.log(jonas[i])
// };

// 48
// const jonas = [
//         'Jonas',
//         'Schmedtmann',
//         2022 - 1991,
//         46,
//         ['Michael', 'Peter']
// ];

// // backwards loop 4,3,2,1,0
// for (let i = jonas.length - 1; i >=0; i--){
//     console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`------------Starting exercise ${exercise}------------`);

//     for (let rep = 1; rep <=5; rep++) {
//         console.log(`Lifting weight repetition ${rep}`)
//     }
// }

// 49 WHILE loops
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} `)
// };

// let rep = 1;
// while (rep<=10) {
//     console.log(`Lifting weights repetition ${rep} `)
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log('loop is about to end...');
// }
// if (x === 3) console.log(23);

// PROBLEM :
// We work for a company building a smart home thermometer.
// Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between
// highest and lowest temperature

// 2) Breaking up into sup-problems

// find the highest temp
// find the lowest temp
// subtract the lowest temp from the highest temp

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i <= temps.length; i++) {
//     const CurTemp = temps[i];
//     if (typeof CurTemp !== 'number') continue;

//     if (CurTemp > max) max = CurTemp;
//     if (CurTemp < min) min = CurTemp;
//   }
//   console.log(max, min);
// };

// calcTempAmplitude([3, 7, 4]);

// const amplitude = console.log(temperatures);
// console.log(amplitude);

// // Problem 2: function should now receive 2 arrays of temps

// const calcTempAmplitudeNew = function (a1, a2) {
//   const temps = a1.concat(a2);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i <= temps.length; i++) {
//     const CurTemp = temps[i];
//     if (typeof CurTemp !== 'number') continue;

//     if (CurTemp > max) max = CurTemp;
//     if (CurTemp < min) min = CurTemp;
//   }
//   console.log(max, min);
// };

// calcTempAmplitude([3, 7, 4]);

// const amplitudeNew = calcTempAmplitudeNew([3, 4, 5], [2, 4, 7]);
// console.log(amplitude);


// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // 🔴 Delayed Departure from FAO to TXL (11h25)
// //              Arrival from BRU to FAO (11h45)
// //   🔴 Delayed Arrival from HEL to FAO (12h05)
// //            Departure from FAO to LIS (12h30)

// console.log(flights.split(+));

// for (const flight of flights.split('+')) {
//   console.log(flight.split(';'));
// }

// const bookings = [];

// const createBooking = function(flightNum, numPassengers = 1, price = 199) {

//   // numPassengers = numPassengers  || 1;
//   // price = price  || 199;

//   const booking = {
//     flightNum, 
//     numPassengers,
//     price
//   }
//   console.log(booking);
//   bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 6, 880);

// createBooking('LH123', undefined, 1999);

// const flight = 'LH123';
// const mejra = {
//   name: 'Mejra Kucevic',
//   passport: 2454645645
// }

// const checkIn = function(flightNum, passenger) {
//    flightNum = 'LH999';
//    passenger.name = 'Mrs.' + passenger.name;

//    if(passenger.passport === 2454645645) {
//     alert('Check in');

//    } else {
//     alert('Wrong passport!')
//    }
// };


// checkIn(flight, mejra);
// console.log(flight);
// console.log(mejra);

// const oneWord = function(str) {
//   return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function(str) {
//   const [first, ...others]= str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function(str, fn) {
//   console.log('Transformed string ${fn(str)}');
  
// }

// transformer('Javascript is the best!', upperFirstWord);

const high5 = function() {
  console.log('High five');
}

document.body.addEventListener('click', high5); 