import { StoreState } from 'states/StoreState';
import { connect, Dispatch } from 'react-redux';
import { AppBarComponent, AppBarComponentProps, AppBarComponentDispatch } from 'components/AppBarComponent';

import * as appBarActions from 'actions/AppBarActions';

export function mapStateToProps(state: StoreState): AppBarComponentProps {
  return {
    user: state.authorization.user
  };
}

export function mapDispatchToProps(dispatch: Dispatch<StoreState>): AppBarComponentDispatch {
  return {
    logout: () => dispatch(appBarActions.logout())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBarComponent);