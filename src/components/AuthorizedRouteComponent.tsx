import * as React from 'react';
import { Route, Redirect } from 'react-router';
import { Routes } from 'constants/routes';
import { navigation } from 'services/navigation';
import currentUser from 'services/currentUser';
import firebase from 'services/firebase';

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