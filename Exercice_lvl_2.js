//1. PRINT OUT ALL NAMES IN VARIABLE

const catsAPI = 'https://api.thecatapi.com/v1/breeds'
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
            const catNames = data.map(cat => cat.name);
            console.log('Cat Names : ', catNames);
    })
    .catch(error => console.error(error));