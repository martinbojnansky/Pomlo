import { combineReducers } from 'redux';
import { StoreState } from 'states/storeState';

import { authorizationReducer } from './authorizationReducer';
import { tasksReducer } from './tasksReducer';

export const reducers = combineReducers<StoreState>({ 
    authorization: authorizationReducer,
    tasks: tasksReducer
});