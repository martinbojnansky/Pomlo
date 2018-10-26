import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { history } from 'services/History';
import { reducers } from 'reducers/Reducers';
import { StoreState, initialState } from 'states/StoreState';

const middleware = 
[
  require('redux-thunk').default, 
  routerMiddleware(history)
];

export function getStore() {
  return createStore<StoreState>(
  connectRouter(history)(reducers),
  initialState(),
  compose(
      applyMiddleware(...middleware),
    ),
  ); 
}