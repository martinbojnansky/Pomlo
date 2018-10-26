import * as React from 'react';
import { Switch, Redirect, Route } from 'react-router';
import { StoreState } from 'states/StoreState';
import { Routes } from 'constants/Routes';
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
                <header>
                    <h1>Pomlo</h1>
                    <span>
                        <b>{this.props.user.displayName}</b>
                        <button>
                            Logout
                        </button>
                    </span>
                </header>
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