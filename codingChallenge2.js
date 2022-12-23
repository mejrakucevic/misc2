// Write a function called 'describeCountry' which takes three parameters: 
// 'country', 'population' and 'capitalCity'. Based on this input, the 
// function returns a string with this format: 'Finland has 6 million people and its 
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the 
// returned values in 3 different variables, and log them to the consol

function describeCountry(country, population, capitalCity) {
    const describedCountry = `${country} has ${population} million people and it's capital city is ${capitalCity}`;
    return describedCountry;
}

const SerbiaD = describeCountry("Serbia", 6, "Belgrade");

const SpainD = describeCountry("Spain", 47, "Madrid");

const BosniaD = describeCountry("Bosnia", 3, "Sarajevo");

console.log(BosniaD);