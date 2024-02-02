//1. READ CATS API AND FIND AVERAGE WEIGHT OF CAT IN METRIC UNIT

const catsAPI = 'https://api.thecatapi.com/v1/breeds';
console.log(catsAPI)
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        const validWeights = data.filter(cat => cat.weight.metric);
        const { totalWeight, catCount } = validWeights.reduce((accumulator, cat) => {
            const weight = parseFloat(cat.weight.metric.replace(/[^0-9.]/g, ''));
            return {
                totalWeight: accumulator.totalWeight + weight,
                catCount: accumulator.catCount + 1
            };
        }, { totalWeight: 0, catCount: 0 });
        const averageWeight = totalWeight / catCount;
        console.log('Average Weight of Cats in Metric Units:', averageWeight.toFixed(2), 'kg');
    })
    .catch(error => console.error(error));


//2. READ COUNTRIES API AND FIND OUT 10 LARGEST COUNTRIES
const countriesAPI = 'https://restcountries.com/v2/all'
console.log(countriesAPI)
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        const sortedCountries = data.sort((a,b) => b.area - a.area);
        const largestCountries = sortedCountries.slice(0, 10);
        largestCountries.forEach((country, index) => {
            console.log(`${index + 1}. ${country.name} - Area: ${country.area} square kilometers`);
        } )
    })
    .catch(error => console.log(error));

//3. READ THE COUNTRIES API AND COUNT TOTAL NUMBER OF LANGUAGES IN THE WORLD USED AS OFFICIALS

fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        const allLanguages = data.flatMap(country => country.languages.map(language => language.name));
        const uniqueLanguages = new Set(allLanguages);
        const totalLanguages = uniqueLanguages.size;

        console.log('Total number of languages used as official languages', totalLanguages)
    })
    .catch(error => console.error(error));