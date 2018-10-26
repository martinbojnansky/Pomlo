import httpClient from 'services/HttpClient';

export default {
    getJoke
}

function getJoke() {
    return fetch('https://api.icndb.com/jokes/random')
    .then(httpClient.validate);
}