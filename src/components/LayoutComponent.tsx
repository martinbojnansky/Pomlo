import * as React from 'react';
import { Switch, Route } from 'react-router';
import { StoreState } from 'states/StoreState';
import { Routes } from 'constants/Routes';
import AppBarContainer from 'containers/AppBarContainer';
import WeekViewContainer from 'containers/WeekViewContainer';

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
                        <Route path={Routes.DEFAULT} component={WeekViewContainer} /> 
                    </Switch> 
                </main>
            </div>
        );
    }
}