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