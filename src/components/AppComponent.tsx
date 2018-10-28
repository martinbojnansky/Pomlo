import * as React from 'react';
import { StoreState } from 'states/storeState';
import { Switch, Route } from 'react-router';
import { Routes } from 'constants/routes';
import { AuthorizedRouteComponent } from 'components/AuthorizedRouteComponent';
import LoginContainer from 'containers/LoginContainer';
import LayoutContainer from 'containers/LayoutContainer';

export interface AppComponentProps {
}

export interface AppComponentDispatch {
}

export class AppComponent extends React.Component<AppComponentProps & AppComponentDispatch, StoreState> {
  render() {
    return (
      <div className="app"> 
        <Switch>
          <Route path={Routes.LOGIN} component={LoginContainer} />
          <AuthorizedRouteComponent path={Routes.DEFAULT} component={LayoutContainer} /> 
        </Switch>
      </div>
    );
  }
}