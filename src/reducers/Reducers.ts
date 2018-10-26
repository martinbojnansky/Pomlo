import { combineReducers } from 'redux';
import { StoreState } from 'states/StoreState';

import { authorizationReducer } from './AuthorizationReducer';
import { jokesReducer } from './JokesReducer';

export const reducers = combineReducers<StoreState>({ 
    authorization: authorizationReducer,
    jokes: jokesReducer
});