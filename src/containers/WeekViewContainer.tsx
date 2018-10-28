import { StoreState } from 'states/storeState';
import { connect, Dispatch } from 'react-redux';
import { WeekViewComponent, WeekViewComponentProps, WeekViewComponentDispatch } from 'components/WeekViewComponent';

import * as getWeekTasksActions from 'actions/tasks/getWeekTasksActions';

export function mapStateToProps(state: StoreState): WeekViewComponentProps {
  return {
    tasks: state.tasks.tasks
  };
}

export function mapDispatchToProps(dispatch: Dispatch<StoreState>): WeekViewComponentDispatch {
  return {
    loadTasks: () => dispatch(getWeekTasksActions.getWeekTasks())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeekViewComponent);