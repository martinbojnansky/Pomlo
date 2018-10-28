import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { navigation } from 'services/navigation';
import { reducers } from 'reducers/reducers';
import { StoreState, initialState } from 'states/storeState';

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