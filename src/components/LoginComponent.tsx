import * as React from 'react';
import { StoreState } from 'states/StoreState';
import { Action } from 'actions/Actions';

export interface LoginComponentProps {
}

export interface LoginComponentDispatch {
    loginWithGoogle: () => Promise<Action>
}

export class LoginComponent extends React.Component<LoginComponentProps & LoginComponentDispatch, StoreState> {
    render() {
        return (
            <div className="login">
                <h2>Pomlo</h2>
                <p>Login</p>
                <p>
                    <button 
                        type="button"
                        onClick={this.props.loginWithGoogle}
                        >
                        Google
                    </button>
                </p>
            </div>
        );
    }
}