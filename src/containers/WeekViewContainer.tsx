import { StoreState } from 'states/storeState';
import { connect, Dispatch } from 'react-redux';
import { WeekViewComponent, WeekViewComponentProps, WeekViewComponentDispatch } from 'components/WeekViewComponent';

import * as getWeekTasksActions from 'actions/tasks/getWeekTasksActions';
import * as openCloseTasksActions from 'actions/tasks/openCloseTasksActions';
import * as createTasksActions from 'actions/tasks/createTasksActions';

export function mapStateToProps(state: StoreState): WeekViewComponentProps {
  return {
    tasks: Object.values(state.tasks.tasks),
    date: new Date()
  };
}

export function mapDispatchToProps(dispatch: Dispatch<StoreState>): WeekViewComponentDispatch {
  return {
    onLoadTasks: () => dispatch(getWeekTasksActions.getWeekTasks()),
    onOpenTask: (id) => dispatch(openCloseTasksActions.openTask(id)),
    onCreateTask: (date) => dispatch(createTasksActions.createTask(date)) 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeekViewComponent);