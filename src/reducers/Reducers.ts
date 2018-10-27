import { combineReducers } from 'redux';
import { StoreState } from 'states/StoreState';

import { authorizationReducer } from './AuthorizationReducer';
import { tasksReducer } from './TasksReducer';

export const reducers = combineReducers<StoreState>({ 
    authorization: authorizationReducer,
    tasks: tasksReducer
});