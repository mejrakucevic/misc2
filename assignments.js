function percentageOfWorld1(population) {
    return (population / 7900) * 100;
    }

    const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
    };

    const percPortugal1 = percentageOfWorld1(10);
    const percChina1 = percentageOfWorld1(1441);
    const percUSA1 = percentageOfWorld1(332);
    console.log(percPortugal1, percChina1, percUSA1)

    const percentageOfWorld3 = (population) => (population / 7900) * 100;

    console.log(percentageOfWorld3(405));

    function describePopulation(country, population) {
        const percentageOfCountry = percentageOfWorld1(population);
        return `${country} has ${population} million people, which is about ${percentageOfCountry} of the world`
    }

    const serbiaDesc = describePopulation("Serbia", 6)
    console.log(serbiaDesc);