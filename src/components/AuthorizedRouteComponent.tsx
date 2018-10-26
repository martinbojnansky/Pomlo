import * as React from 'react';
import { Route, Redirect } from 'react-router';
import { Routes } from 'constants/Routes';

const renderAuthorizedRouteComponent = (props: {}) => (Component: any) => {
    return class AuthorizedRouteSwitch extends React.PureComponent {
        render() {
            let isAuthenticated: boolean = true;
            return (
                 isAuthenticated ? <Component {...props}/> : <Redirect to={{ pathname: Routes.LOGIN}}/>
            );
        }
    };
};

export const AuthorizedRouteComponent = ({ component, ...rest }: any) => (
    <Route {...rest} component={renderAuthorizedRouteComponent(rest)(component)} />
);

export default AuthorizedRouteComponent;