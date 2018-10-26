import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getStore } from 'services/Store';
import { navigation } from 'services/Navigation';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { AppComponent } from 'components/AppComponent';
import registerServiceWorker from 'registerServiceWorker';

import 'styles/styles.css';

ReactDOM.render(
  <Provider store={getStore()}>
      <ConnectedRouter history={navigation}>
        <AppComponent />
      </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
