import * as React from 'react';
import { StoreState } from 'states/storeState';
import { Action } from 'actions/actions';
import currentUser from 'services/currentUser';
import { navigation } from 'services/navigation';
import { Routes } from 'constants/routes';

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
                <span>Login</span>
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