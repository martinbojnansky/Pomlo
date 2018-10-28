import { StoreState } from 'states/storeState';
import { connect, Dispatch } from 'react-redux';
import { WeekViewComponent, WeekViewComponentProps, WeekViewComponentDispatch } from 'components/WeekViewComponent';

import * as weekViewActions from 'actions/weekViewActions';

export function mapStateToProps(state: StoreState): WeekViewComponentProps {
  return {
    tasks: state.tasks.tasks
  };
}

export function mapDispatchToProps(dispatch: Dispatch<StoreState>): WeekViewComponentDispatch {
  return {
    loadTasks: () => dispatch(weekViewActions.loadTasks())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeekViewComponent);