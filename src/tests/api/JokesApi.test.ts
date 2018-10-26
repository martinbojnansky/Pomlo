import api from 'api/JokesApi';
import httpClient from 'services/HttpClient';
import { Joke } from 'models/Joke';

let fetchMock = require('fetch-mock');

describe('Tests JokesApi.', () => {
  beforeAll(() => {
  });
  afterAll(() => {
  });
  afterEach(() => {
  });
  
  it('Call get joke.', () => {
    let joke = { value: { joke: "Hahaha" }};
    fetchMock.get('https://api.icndb.com/jokes/random', JSON.stringify(joke));
    httpClient.parse<Joke>(api.getJoke()).then(response => {
      expect(response).toEqual(joke);
    });
  });
});