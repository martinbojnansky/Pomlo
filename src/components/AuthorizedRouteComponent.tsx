import * as React from 'react';
import { Route, Redirect } from 'react-router';
import { Routes } from 'constants/Routes';
import { LocalStorageKeys } from 'constants/LocalStorageKeys';
import { history } from 'services/History';
import firebase from 'services/Firebase';

const renderAuthorizedRouteComponent = (props: {}) => (Component: any) => {
    return class AuthorizedRouteSwitch extends React.PureComponent {
        componentDidMount() {
            firebase.auth().onAuthStateChanged(user => {
                if (!user) {
                    history.push(Routes.LOGIN);
                }
            });
        }

        render() {
            let isAuthorized = localStorage.getItem(LocalStorageKeys.IS_AUTHORIZED) === true.toString();
            return (
                isAuthorized ? <Component {...props}/> : <Redirect to={{ pathname: Routes.LOGIN}}/>
            );
        }
    };
};

export const AuthorizedRouteComponent = ({ component, ...rest }: any) => (
    <Route {...rest} component={renderAuthorizedRouteComponent(rest)(component)} />
);

export default AuthorizedRouteComponent;