import { StoreState } from 'states/storeState';
import { connect, Dispatch } from 'react-redux';
import { AppBarComponent, AppBarComponentProps, AppBarComponentDispatch } from 'components/AppBarComponent';

import * as authorizationLogoutActions from 'actions/authorization/logoutActions';

export function mapStateToProps(state: StoreState): AppBarComponentProps {
  return {
    user: state.authorization.user
  };
}

export function mapDispatchToProps(dispatch: Dispatch<StoreState>): AppBarComponentDispatch {
  return {
    logout: () => dispatch(authorizationLogoutActions.logout())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBarComponent);