import * as React from 'react';
import { StoreState } from 'states/StoreState';
import { Action } from 'actions/Actions';
import currentUser from 'services/CurrentUser';
import { navigation } from 'services/Navigation';
import { Routes } from 'constants/Routes';

export interface LoginComponentProps {
}

export interface LoginComponentDispatch {
    loginWithGoogle: () => Promise<Action>
}

export class LoginComponent extends React.Component<LoginComponentProps & LoginComponentDispatch, StoreState> {
    componentWillMount() {
        if(currentUser.get()) {
            navigation.push(Routes.DEFAULT);
        }
    }
    
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