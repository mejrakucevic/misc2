// Write a function called 'describeCountry' which takes three parameters: 
// 'country', 'population' and 'capitalCity'. Based on this input, the 
// function returns a string with this format: 'Finland has 6 million people and its 
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the 
// returned values in 3 different variables, and log them to the consol

// function describeCountry(country, population, capitalCity) {
//     const describedCountry = `${country} has ${population} million people and it's capital city is ${capitalCity}`;
//     return describedCountry;
// }

// const SerbiaD = describeCountry("Serbia", 6, "Belgrade");

// const SpainD = describeCountry("Spain", 47, "Madrid");

// const BosniaD = describeCountry("Bosnia", 3, "Sarajevo");

// console.log(BosniaD);

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so 
// one average score per team).
// A team only wins if it has at least double the average score of the other team. 
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// const calcAverage = (first, second, third) => (first + second + third) / 3;

// let Koints = calcAverage(65, 54, 49);
// let DolphinsPoints = calcAverage(44, 23, 71);

// const checkWinner = function(KoalasAverage, DolphinsAverage) {
    
//         if (KoalasAverage > 2 * DolphinsAverage) {
//                 console.log(`Koalas win ${KoalasAverage} vs. ${DolphinsAverage} `);
//                     } else if (DolphinsAverage > KoalasAverage * 2) {
//                             console.log(`Dolphins win ${DolphinsAverage} vs. ${KoalasAverage} `);
//                                 } else {
//                                         oalasPoints = calcAverage(65, 54, 49);
// let DolphinsPoints = calcAverage(44, 23, 71);

// const checkWinner = function(KoalasAverage, DolphinsAverage) {
    
//         if (KoalasAverage > 2 * DolphinsAverage) {
//                 console.log(`Koalas win ${KoalasAverage} vs. ${DolphinsAverage} `);
//                     } else if (DolphinsAverage > KoalasAverage * 2) {
//                             console.log(`Dolphins win ${DolphinsAverage} vs. ${KoalasAverage} `);
//                                 } else {
//                                         oints = calcAverage(65, 54, 49);
// let DolphinsPoints = calcAverage(44, 23, 71);

// const checkWinner = function(KoalasAverage, DolphinsAverage) {
    
//     if (KoalasAverage > 2 * DolphinsAverage) {
//         console.log(`Koalas win ${KoalasAverage} vs. ${DolphinsAverage} `);
//     } else if (DolphinsAverage > KoalasAverage * 2) {
//         console.log(`Dolphins win ${DolphinsAverage} vs. ${KoalasAverage} `);
//     } else {
//         console.log("No team wins...")}
// };

// checkWinner(KoalasPoints, DolphinsPoints);

// KoalasPoints 

// coding challenge 2
// Steven wants to build a very simple tip calculator for whenever he goes eating in a 
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
// start with an if/else statement, and then try to convert it to a ternary 
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value 
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
// 316.25”

// // Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
// // the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
// // 20%.
// // Your tasks:
// // 1. Write a function 'calcTip' that takes any bill value as an input and returns 
// // the corresponding tip, calculated based on the rules above (you can check out 
// // the code from first tip calculator challenge if you need to). Use the function 
// // type you like the most. Test the function using a bill value of 100
// // 2. And now let's use arrays! So create an array 'bills' containing the test data 
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from 
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44

let tip = '';
function tipCalc(bill) {
    if (bill >= 50 && bill <= 300) {
        tip = 0.15 * bill; 
        console.log(`The tip for a bill worth ${bill}, is ${tip}, and the total is ${bill + tip} `)
    } else {
        tip = 0.2 * bill;
        console.log(`The tip for a bill worth ${bill}, is ${tip}, and the total is ${bill + tip}`)
    }
}

console.log(tipCalc(17));

let bills = [125, 505, 44]
let tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];
let totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);