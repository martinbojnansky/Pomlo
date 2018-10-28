import { StoreState } from 'states/storeState';
import { connect, Dispatch } from 'react-redux';
import { LoginComponent, LoginComponentProps, LoginComponentDispatch } from 'components/LoginComponent';

import * as authorizationLoginActions from 'actions/authorization/loginActions';

export function mapStateToProps(state: StoreState): LoginComponentProps {
  return {
  };
}

export function mapDispatchToProps(dispatch: Dispatch<StoreState>): LoginComponentDispatch {
  return {
    loginWithGoogle: () => dispatch(authorizationLoginActions.loginWithGoogle())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);