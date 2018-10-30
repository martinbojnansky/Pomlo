import { StoreState } from 'states/storeState';
import { connect, Dispatch } from 'react-redux';
import { WeekViewComponent, WeekViewComponentProps, WeekViewComponentDispatch } from 'components/WeekViewComponent';

import * as getWeekTasksActions from 'actions/tasks/getWeekTasksActions';
import * as openCloseTasksActions from 'actions/tasks/openCloseTasksActions';

export function mapStateToProps(state: StoreState): WeekViewComponentProps {
  return {
    tasks: Object.values(state.tasks.tasks)
  };
}

export function mapDispatchToProps(dispatch: Dispatch<StoreState>): WeekViewComponentDispatch {
  return {
    loadTasks: () => dispatch(getWeekTasksActions.getWeekTasks()),
    onOpenTask: (id: string) => dispatch(openCloseTasksActions.openTask(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeekViewComponent);