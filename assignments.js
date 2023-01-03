// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
//     }

//     const percentageOfWorld2 = function (population) {
//     return (population / 7900) * 100;
//     };

//     const percPortugal1 = percentageOfWorld1(10);
//     const percChina1 = percentageOfWorld1(1441);
//     const percUSA1 = percentageOfWorld1(332);
//     console.log(percPortugal1, percChina1, percUSA1)

//     const percentageOfWorld3 = (population) => (population / 7900) * 100;

//     console.log(percentageOfWorld3(405));

//     function describePopulation(country, population) {
//         const percentageOfCountry = percentageOfWorld1(population);
//         return `${country} has ${population} million people, which is about ${percentageOfCountry} of the world`
//     }

//     const serbiaDesc = describePopulation("Serbia", 6)
//     console.log(serbiaDesc);

// 43 objects

// const myCountry = {
//     country : 'Serbia',
//     capital : 'Belgrade',
//     language : 'Serbian',
//     population : 6.6,
//     neighbours : ['Hungary', 'Romania', 'Bulgaria', 'Macedonia', 'Albania', 'Montenegro', 'Bosnia N Hercegovina', 'Croatia']
// }

function percentageOfWorld1(population) {
        return (population / 7900) * 100;

        const percPortugal1 = percentageOfWorld1(10);
        const percChina1 = percentageOfWorld1(1441);
        const percUSA1 = percentageOfWorld1(332);
    }


let percentages2 = [];
const populations = [10, 1441, 332, 63];

for (let i = 0; i <= populations.length; i++) {
    const perc = percentageOfWorld1([populations[i]]);

    percentages2.push(perc);
}

console.log(percentages2);