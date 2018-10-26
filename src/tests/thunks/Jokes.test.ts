import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { StoreState, initialState } from 'states/StoreState';
import { ActionType } from 'actions/Actions';
import * as jokesActions from 'actions/JokesActions';

const middlewares = [thunk];
const mockStore = configureMockStore<StoreState>(middlewares);
const fetchMock = require('fetch-mock');

describe('Tests joke thunks.', () => {
    beforeAll(() => {
      });
      afterAll(() => {
      });
      afterEach(() => {
      });

  it('Loads joke.', () => {
    let joke = { value: { joke: "Hahaha" }};
    fetchMock.get('https://api.icndb.com/jokes/random', JSON.stringify(joke));

    const store = mockStore(initialState());
    const expectedActions = [
      { 
          type: ActionType.JOKES_LOAD_JOKE,
          joke: "Hahaha"
      },
    ];

    return store.dispatch(jokesActions.loadJoke())
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});