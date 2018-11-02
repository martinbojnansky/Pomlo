import { StoreState } from 'states/storeState';
import { connect, Dispatch } from 'react-redux';
import { TaskModalComponent, TaskModalComponentProps, TaskModalComponentDispatch } from 'components/TaskModalComponent';

import * as openCloseTasksActions from 'actions/tasks/openCloseTasksActions';
import * as changeTasksActions from 'actions/tasks/changeTasksActions';
import * as updateTasksActions from 'actions/tasks/updateTasksActions';

export function mapStateToProps(state: StoreState): TaskModalComponentProps {
  return {
    task: state.tasks.openedTaskId ? state.tasks.tasks[state.tasks.openedTaskId] : undefined
  };
}

export function mapDispatchToProps(dispatch: Dispatch<StoreState>): TaskModalComponentDispatch {
  return {
    onClosed: () => dispatch(openCloseTasksActions.closeTask()),
    onTaskChanged: (task) => dispatch(changeTasksActions.changeTask(task)),
    onTaskUpdated: (task) => dispatch(updateTasksActions.updateTask(task))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskModalComponent);