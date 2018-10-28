import * as React from 'react';
import { StoreState } from 'states/storeState';
import { Action } from 'actions/actions';

export interface AppBarComponentProps {
    user: firebase.UserInfo
}

export interface AppBarComponentDispatch {
    logout: () => Promise<Action>
}

export class AppBarComponent extends React.Component<AppBarComponentProps & AppBarComponentDispatch, StoreState> {
    render() {
        return (
            <header className="appbar">
                <div className="appbar-userinfo">
                    <img src={this.props.user.photoURL ? this.props.user.photoURL : ""} />
                    <span>{this.props.user.displayName}</span>
                </div>
                <button 
                    type="button"
                    title="Logout"
                    onClick={this.props.logout}>
                    |&rarr;
                </button>
            </header>
        );
    }
}