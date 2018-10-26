import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { navigation } from 'services/Navigation';
import { reducers } from 'reducers/Reducers';
import { StoreState, initialState } from 'states/StoreState';

const middleware = 
[
  require('redux-thunk').default, 
  routerMiddleware(navigation)
];

export function getStore() {
  return createStore<StoreState>(
  connectRouter(navigation)(reducers),
  initialState(),
  compose(
      applyMiddleware(...middleware),
    ),
  ); 
}