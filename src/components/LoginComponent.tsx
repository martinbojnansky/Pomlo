import * as React from 'react';
import { StoreState } from 'states/StoreState';

import * as loginActions from 'actions/LoginActions';

export interface LoginComponentProps {
}

export interface LoginComponentDispatch {
    loginWithGoogle: () => Promise<loginActions.LoginCompleted | loginActions.LoginFailed>
}

export class LoginComponent extends React.Component<LoginComponentProps & LoginComponentDispatch, StoreState> {
    render() {
        return (
            <div>
                <h1>Pomlo</h1>
                <button 
                    type="button"
                    onClick={this.props.loginWithGoogle}
                    >
                    Login with Google
                </button>
            </div>
        );
    }
}