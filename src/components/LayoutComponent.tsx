import * as React from 'react';
import { Switch, Redirect, Route } from 'react-router';
import { StoreState } from 'states/StoreState';
import { Routes } from 'constants/Routes';
import JokesContainer from 'containers/JokesContainer';

export interface LayoutComponentProps {
}

export interface LayoutComponentDispatch {
}

export class LayoutComponent extends React.Component<LayoutComponentProps & LayoutComponentDispatch, StoreState> {
    render() {
        return (
            <div className="layout">
                <nav></nav>
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