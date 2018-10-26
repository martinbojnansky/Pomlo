import * as React from 'react';
import { Route, Redirect } from 'react-router';
import { Routes } from 'constants/Routes';
import { navigation } from 'services/Navigation';
import currentUser from 'services/CurrentUser';
import firebase from 'services/Firebase';

const renderAuthorizedRouteComponent = (props: {}) => (Component: any) => {
    return class AuthorizedRouteSwitch extends React.PureComponent {
        componentDidMount() {
            firebase.auth().onAuthStateChanged(user => {
                if (!user) {
                    navigation.push(Routes.LOGIN);
                }
            });
        }

        render() {
            let isAuthorized = currentUser.get() !== null;
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