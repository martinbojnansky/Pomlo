import * as React from 'react';
import { Switch, Redirect, Route } from 'react-router';
import { StoreState } from 'states/StoreState';
import { Routes } from 'constants/Routes';
import AppBarContainer from 'containers/AppBarContainer';
import JokesContainer from 'containers/JokesContainer';

export interface LayoutComponentProps {
    user: firebase.UserInfo
}

export interface LayoutComponentDispatch {
}

export class LayoutComponent extends React.Component<LayoutComponentProps & LayoutComponentDispatch, StoreState> {
    render() {
        return (
            <div className="layout">
                <AppBarContainer/>
                <main>
                    <Switch>
                        <Redirect exact={true} path={Routes.DEFAULT} to={Routes.JOKES} />
                        <Route path={Routes.JOKES} component={JokesContainer} /> 
                    </Switch> 
                </main>
            </div>
        );
    }
}