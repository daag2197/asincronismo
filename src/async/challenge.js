const fetchData = require('../utils/fetchData');
let url = 'https://rickandmortyapi.com/api/character/';

const getData = async () => {
    try {
        const data = await fetchData(url);
        const character = await fetchData(`${url}${data.results[0].id}`);
        const location = await fetchData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(location.name);
    }catch(err){
        console.error(err);
    }

}

getData();