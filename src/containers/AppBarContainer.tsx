import { StoreState } from 'states/storeState';
import { connect, Dispatch } from 'react-redux';
import { AppBarComponent, AppBarComponentProps, AppBarComponentDispatch } from 'components/AppBarComponent';

import * as authorizationLogoutActions from 'actions/authorization/logoutActions';
import * as changeTasksWeekDateActions from 'actions/tasks/changeTasksWeekDateActions';

export function mapStateToProps(state: StoreState): AppBarComponentProps {
  return {
    user: state.authorization.user,
    weekDate: state.tasks.weekDate
  };
}

export function mapDispatchToProps(dispatch: Dispatch<StoreState>): AppBarComponentDispatch {
  return {
    onLogout: () => dispatch(authorizationLogoutActions.logout()),
    onWeekDateChange: (date) => dispatch(changeTasksWeekDateActions.changeWeekDate(date))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBarComponent);