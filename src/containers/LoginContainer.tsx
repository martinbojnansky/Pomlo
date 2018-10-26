import { StoreState } from 'states/StoreState';
import { connect, Dispatch } from 'react-redux';
import { LoginComponent, LoginComponentProps, LoginComponentDispatch } from 'components/LoginComponent';

import * as loginActions from 'actions/LoginActions';

export function mapStateToProps(state: StoreState): LoginComponentProps {
  return {
  };
}

export function mapDispatchToProps(dispatch: Dispatch<StoreState>): LoginComponentDispatch {
  return {
    loginWithGoogle: () => dispatch(loginActions.loginWithGoogle())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);