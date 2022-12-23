// 'use strict'; // helps us see the bugs in our code, 1. forbits us to write certain code 2. shows us errors

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true; // ovde smo namerno napisali Driver umesto Drivers, u obicnom JS u konzoli se nista ne bi pokazalo dok u strict modu nam tacno kaze da je problem u hasDriverLicense
// if (hasDriversLicense) console.log("I can drive.")

// 33. 
function logger() {
    console.log("My name is Mejra");
}

// calling / running/ invoking function
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice
} 

const orangeJuice = fruitProcessor(4, 12)
const appleJuice = fruitProcessor(10, 0);
const appleOrangeJuice = fruitProcessor(6, 6);

console.log(appleJuice);


