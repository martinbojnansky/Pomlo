import { combineReducers } from 'redux';
import { StoreState } from 'states/StoreState';

import { jokesReducer } from './JokesReducer';

export const reducers = combineReducers<StoreState>({ 
    jokes: jokesReducer
});